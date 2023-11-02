import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useTheme } from './styles/ThemeContext';
import { getColors, colors } from './styles/theme';
import { getStyles } from './styles/ProfileScreen';
import { getProfileData, editProfileData } from './service';

const ProfileScreen = ({ route, navigation }) => {
  const { user, token } = route.params;

  const [state, setState] = React.useState({
    profilePic: '',
    firstName: '',
    lastName: '',
  });
  const set = newState => setState(state => ({ ...state, ...newState }));

  const {name} = useTheme()
  const colors = getColors(name)
  const styles = getStyles(colors)


  const getOriginalData = async () => {
    console.log('....OG..data...began..',);
    const response = await getProfileData({ userId: user._id, token })
    console.log('....OG data', response);
    set({
      profilePic: response.profilePic,
      firstName: response.firstName,
      lastName: response.lastName
    })
  }

  React.useEffect(() => {
    getOriginalData()
  }, [])


  const onEditProfileData = async () => {
    await editProfileData({ userId: user._id, token, state })
  }
  const onSubmit = async () => {
    console.log('....state', state);
    onEditProfileData();
  };

  const url = 'https://i.imgur.com/hZ9AWzX.jpg';

  return (
    <View style={styles.container}>
      <View style={styles.profilePicContainer}>
        <Image
          style={styles.profilePic}
          src={state.profilePic}
          resizeMode='contain'
          accessibilityLabel='my profile'
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          placeholder="Pictute URL"
          value={state.profilePic}
          style={styles.input}
          onChangeText={text => set({ profilePic: text })}
        />
      </View >
      <View style={styles.inputView}>
        <TextInput
          placeholder="First Name"
          value={state.firstName}
          style={styles.input}
          onChangeText={text => set({ firstName: text })}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Last Name"
          value={state.lastName}
          style={styles.input}
          onChangeText={text => set({ lastName: text })}
        />
      </View>
      <View style={styles.submitBtnContainer}>
        <TouchableOpacity onPress={onSubmit} style={styles.submitBtn}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
