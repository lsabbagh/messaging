import { FlatList, View, Text, Modal, Pressable, TextInput, TouchableOpacity,} from 'react-native';
import React from 'react';
import {useTheme} from './styles/ThemeContext';
import {getColors, colors} from './styles/theme';
import {getStyles} from './styles/ForgetPassScreen';
import {forgetPass} from './service';

export default function ForgetPassword() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalBVisible, setModalBVisible] = React.useState(false);
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
    if (state.username == '' || state.email == '' || state.email == null) {
      console.log('....stopped');
      return;
    };
    const response = await forgetPass(state.username, state.email);
    if (!response.match) {
      console.log('....stopped..2', response);
      setModalVisible(true);
      set({ username: '', email: '' });
      return;
    };
    setModalBVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>A <Text style={styles.highlighedText}>SECRET KEY</Text> will be sent to your email.</Text>
        <Text style={styles.text}>To confirm that's you, please enter your credentials:</Text>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Incorrect emial</Text>
          <Pressable
            style={styles.modalButton}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.modalTextStyle}>Try Again!</Text>
          </Pressable>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalBVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Email Sent! Check your email</Text>
          <Pressable
            style={styles.modalButton}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.modalTextStyle}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}
