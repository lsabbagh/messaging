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


export default function App() {

  const [user, setUser] = React.useState(null)
  const [fetching, setFetching] = React.useState(true)
  const [reciever, setReciever] = React.useState(null)

  const retrieveUser = async () => {
    setFetching(true)
    try {
      const user = await storage.load({ key: 'user', autoSync: true, syncInBackground: true })
      setUser(user)
    } catch (error) {
      setUser(null)
      console.log('error', error);
    }

    setFetching(false)
  }
  React.useEffect(() => {
    retrieveUser()
  }, [])

  const onSignIn = (_user) => {
    setUser(_user)
  }

  const getReciever = (data) => {
    setReciever(data)
  }

  const isSignedIn = !!user

  const params = { user, getReciever }

  if (fetching) {
    return <ActivityIndicator size={'large'} />
  }
  return <NavigationContainer>
    <Stack.Navigator>
      {isSignedIn && <>
        <Stack.Screen name="Home" component={ChatList} initialParams={params} options={() => ({ title: "Home", headerRight: () => ( <Button onPress={() => setUser(null)} title="Sign Out" color={colors.bg.v}/> )})} />
        <Stack.Screen name="Chat" component={Chat} initialParams={params} options={()=> ({title: reciever})}/>
        <Stack.Screen name="Users" component={UsersScreen} initialParams={params} />
      </>}

      {!isSignedIn && <>
        <Stack.Screen name="SignIn" component={SignInScreen} initialParams={{ onSignIn }} />
        <Stack.Screen name="ForgotPassword" component={ForgetPassword} />
      </>}


    </Stack.Navigator>
  </NavigationContainer>
}
