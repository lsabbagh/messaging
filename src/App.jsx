import React from 'react';
import storage from './storage';


import { NavigationContainer, Screen } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LogBox, ActivityIndicator } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Stack = createNativeStackNavigator();

import Chat from './Chat.screen';
import ChatList from './ChatsList.screen';
import SignInScreen from './SignIn.screen';
import UsersScreen from './Users.screen';
// import SignOut from './SignOut.screen';

export default function App() {

  const [user, setUser] = React.useState(null)
  const [fetching, setFetching] = React.useState(true)


  const retrieveUser = async () => {
    setFetching(true)
    const user = await storage.load({ key: 'user', autoSync: true, syncInBackground: true })
    setUser(user)
    setFetching(false)
  }
  React.useEffect(() => {
    retrieveUser()
  }, [])

  const onSignIn = (_user) => {
    setUser(_user)
  }

  const isSignedIn = !!user

  const params = { user }

  if (fetching) {
    return <ActivityIndicator size={'large'} />
  }
  return <NavigationContainer>
    <Stack.Navigator>
      {isSignedIn && <>
        <Stack.Screen name="Home" component={ChatList} initialParams={params} />
        {/* <Stack.Screen name="SignOut" component={SignOut} initialParams={params} /> */}
        <Stack.Screen name="Chat" component={Chat} initialParams={params} />
        <Stack.Screen name="Users" component={UsersScreen} initialParams={params} />
      </>}

      {!isSignedIn && <>
        <Stack.Screen name="SignIn" component={SignInScreen} initialParams={{ onSignIn }} />
      </>}


    </Stack.Navigator>
  </NavigationContainer>
}
