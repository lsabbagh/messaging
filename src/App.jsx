import React from 'react';
import storage from './storage';

import { NavigationContainer, Screen } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LogBox, ActivityIndicator, Button } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Stack = createNativeStackNavigator();

import Chat from './Chat.screen';
import ChatList from './ChatsList.screen';
import SignInScreen from './SignIn.screen';
import UsersScreen from './Users.screen';
import ForgetPassword from './ForgotPassword.Screen';
import { colors } from './styles/theme';
import { logout, storageData } from './service';


export default function App() {

  const [savedData, setSavedData] = React.useState(null)
  const [fetching, setFetching] = React.useState(false)
  const [receiver, setReceiver] = React.useState(null)

  const user = savedData?.user;
  const token = savedData?.token


  const retrieveUser = async () => {
    setFetching(true);
    try {
      console.log('....1 11', );
      const data = await storageData();
      setSavedData(data);
      console.log('....savedData', savedData);
    } catch (error) {
      setSavedData(null)
      console.log('error', error);
    }

    setFetching(false)
  }
  React.useEffect(async() => {
    retrieveUser()
    // await storage.remove({ key: 'auth' });
  }, [])

  const onSignIn = (data) => {

    setSavedData(data);
  }

  const getReceiver = (data) => {
    setReceiver(data)
  }

  const handleLogout = async (_user) => {
    console.log('....logout began', _user);
    await logout({userId: _user._id, token});
    await storage.remove({ key: 'auth' });
    setSavedData(null)
    console.log('....logout successful');
  }

  const isSignedIn = !!token;

  const params = { user, getReceiver, token }

  if (fetching) {
    return <ActivityIndicator size={'large'} />
  }
  return <NavigationContainer>
    <Stack.Navigator>
      {isSignedIn && <>
        <Stack.Screen name="Home" component={ChatList} initialParams={params} options={() => ({ title: "Home", headerRight: () => (<Button onPress={() => handleLogout(user)} title="Log Out" color={colors.bg.v} />) })} />
        <Stack.Screen name="Chat" component={Chat} initialParams={params} options={() => ({ title: receiver })} />
        <Stack.Screen name="Users" component={UsersScreen} initialParams={params} />
      </>}

      {!isSignedIn && <>
        <Stack.Screen name="SignIn" component={SignInScreen} initialParams={{ onSignIn }} />
        <Stack.Screen name="ForgotPassword" component={ForgetPassword} />
      </>}


    </Stack.Navigator>
  </NavigationContainer>
}
