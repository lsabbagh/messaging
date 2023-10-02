import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import storage from './storage';
import { styles } from './styles/SignInScreen';
import {URL} from '@env'
import { useNavigation } from '@react-navigation/native';

const SignIn = (props) => {
  const [state, setState] = useState({
    username: '',
    password: '',
  })
  const set = newState => setState(state => ({...state, ...newState}))
  const navigator = useNavigation();
  const onPressLogin = async () => {
    const response = await signIn(state.username, state.password)
    const user = response.user
    storage.save({
      key: 'user',
      data: user
    })
    props.route?.params?.onSignIn?.(user)
  };
  const onPressForgotPassword = () => {
    navigator.navigate('ForgotPassword')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login Screen</Text>
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

const signIn = async (username, password) => {
  const response = await fetch(URL + "users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
      },
      body: JSON.stringify({username, password})
    })
  const data = await response.json();
  return data;
};