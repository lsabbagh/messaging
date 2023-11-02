import React from 'react';
import storage from './storage';
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer, Screen } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox, ActivityIndicator, Button, TouchableOpacity, View } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Stack = createNativeStackNavigator();

import Chat from './Chat.screen';
import ChatList from './ChatsList.screen';
import SignInScreen from './SignIn.screen';
import UsersScreen from './Users.screen';
import ForgetPassword from './ForgotPassword.Screen';
import ProfileScreen from './Profile.Screen';
import HeaderRight from './HeaderRight';
// import ChatHeaderRight from './ChatHeaderRight'
// import useTheme from './styles/useTheme';
import { ThemeProvider, useTheme } from './styles/ThemeContext';
import { getColors, colors } from './styles/theme';
import { logout, storageData } from './service';


function App() {

  const [savedData, setSavedData] = React.useState(null)
  const [fetching, setFetching] = React.useState(false)
  const [receiver, setReceiver] = React.useState(null)
  const [visible, setVisible] = React.useState(false)

  const user = savedData?.user;
  const token = savedData?.token;

  const { name } = useTheme()
  const colors = getColors(name)


  const retrieveUser = async () => {
    setFetching(true);
    try {
      console.log('....1 11',);
      const data = await storageData();
      setSavedData(data);
      console.log('....savedData', savedData);
    } catch (error) {
      setSavedData(null)
      console.log('error', error);
    }

    setFetching(false)
  }

  React.useEffect(async () => {
    retrieveUser();
  }, [])

  const onSignIn = (data) => {
    setSavedData(data);
  }

  const getReceiver = (data) => {
    setReceiver(data)
  }

  const handleLogOut = () => {
    console.log('....onLogout..new');
    setSavedData(null)
  }

  const handleMenuVisibilty = (data) => {
    setVisible(data)
  }

  const isSignedIn = !!token;
  const params = { user, getReceiver, token }

  if (fetching) { return <ActivityIndicator size={'large'} /> }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.bg.i, } }}>

        {isSignedIn && <>
          <Stack.Screen name="Home" component={ChatList} initialParams={params} options={() => ({
            headerTitle: "Chatoo",
            headerTitleStyle: {
              color: colors.font.s
            }, headerRight:
              () => (
                <HeaderRight
                  data={savedData}
                  visibleMenu={visible}
                  setVisibleMenu={handleMenuVisibilty}
                  onLogOut={handleLogOut}
                // onThemeChange={changeTheme}
                />
              )
          })} />
          <Stack.Screen name="Chat" component={Chat} initialParams={params} options={() => ({ headerTitle: receiver, headerTitleStyle: { color: colors.font.iii }, headerTintColor: `${colors.font.iii}` })} />
          <Stack.Screen name="Users" component={UsersScreen} initialParams={params} options={() => ({ headerTitleStyle: { color: colors.font.iii }, headerTintColor: `${colors.font.iii}` })} />
          <Stack.Screen name="Profile" component={ProfileScreen} initialParams={params} options={{ headerTitle: 'My Profile', headerTitleStyle: { color: colors.font.iii }, headerTintColor: `${colors.font.iii}` }} />
        </>}

        {!isSignedIn && <>
          <Stack.Screen name="SignIn" component={SignInScreen} initialParams={{ onSignIn }} options={() => ({ headerTitle: "Chatoo", headerTitleStyle: { color: colors.font.iii }, headerTintColor: `${colors.font.iii}` })} />
          <Stack.Screen name="ForgotPassword" component={ForgetPassword} options={() => ({ headerTitle: "Chatoo", headerTitleStyle: { color: colors.font.iii }, headerTintColor: `${colors.font.iii}` })}/>
        </>}


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
)