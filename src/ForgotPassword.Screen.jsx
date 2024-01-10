import {
  FlatList,
  View,
  Text,
  Button,
  LogBox,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useTheme} from './styles/ThemeContext';
import {getColors, colors} from './styles/theme';
import {getStyles} from './styles/ForgetPassScreen';
import {forgetPass} from './service';

export default function ForgetPassword() {
  const [state, setState] = React.useState({
    username: '',
    email: '',
  });
  const set = newState => setState(state => ({...state, ...newState}));
  console.log('....', state);

  const {name} = useTheme();
  const colors = getColors(name);
  const styles = getStyles(colors);

  const onPressLogin = async () => {
    const response = await forgetPass(state.username, state.email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>A <Text style={styles.highlighedText}>SECRET KEY</Text> will be sent to your email.</Text>
        <Text style={styles.text}>To confirm that's you please enter your credentials:</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          // value={state.username}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={text => set({username: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={text => set({email: text})}
        />
      </View>

      <TouchableOpacity onPress={onPressLogin} style={styles.submitBtn}>
        <Text>Send Email</Text>
      </TouchableOpacity>
    </View>
  );
}
