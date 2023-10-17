import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native';
import storage from './storage';
import { styles } from './styles/SignInScreen';
import { URL } from '@env'
import { signIn } from './service';
import { useNavigation } from '@react-navigation/native';

const SignIn = (props) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [state, setState] = useState({
    username: '',
    password: '',
  })
  const set = newState => setState(state => ({ ...state, ...newState }))
  const navigator = useNavigation();


  const onPressLogin = async () => {
    if(state.username == '' || state.password == '' || state.password == null) {
      console.log('....stopped');
      return;
    };

    const response = await signIn(state.username, state.password)
    if (!response.match) {
      console.log('....stopped..2', response);
      setModalVisible(true);
      set({ username: '', password: '' });       
      return;
    };
    console.log('....logging In', response);
    storage.save({
      key: 'auth',
      data: response
    })
    props.route?.params?.onSignIn(response)
  };

  const onPressForgotPassword = () => {
    navigator.navigate('ForgotPassword')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login Screen</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Incorrect username or password</Text>
          <Pressable
            style={styles.modalButton}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.modalTextStyle}>Try Again!</Text>
          </Pressable>
        </View>
      </Modal>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          value={state.username}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={text => set({ username: text })} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          value={state.password}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={text => set({ password: text })} />
      </View>

      <TouchableOpacity
        onPress={onPressForgotPassword}>
        <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPressLogin}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN </Text>
      </TouchableOpacity>

    </View>
  );
}

export default SignIn;