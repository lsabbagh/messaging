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

import Intro from './minorFiles/Intro';
import Chat from './Chat.screen';
import ChatList from './ChatsList.screen';
import SignInScreen from './SignIn.screen';
import UsersScreen from './Users.screen';
import ForgetPassword from './ForgotPassword.Screen';
import ProfileScreen from './Profile.Screen';
import HeaderRight from './minorFiles/HeaderRight';
// import ChatHeaderRight from './ChatHeaderRight'
// import useTheme from './styles/useTheme';
import { ThemeProvider, useTheme } from './styles/ThemeContext';
import { getColors, colors } from './styles/theme';
import { logout, storageData } from './service';


// test super password env file
// response message in forget Pass
// update useffect in cms for groups and users

function App() {

  const [savedData, setSavedData] = React.useState(null)
  const [fetching, setFetching] = React.useState(false)
  const [receiver, setReceiver] = React.useState(null)
  const [visible, setVisible] = React.useState(false)
  const [isIntroVisible, setIsIntroVisible] = React.useState(false);


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
      console.log('....retrieveUser..error', error);
    }

    setFetching(false)
  }

  // const checkIntroFlag = async () => {
  //   try {
  //     console.log('....checkIntroFlag', isIntroVisible);
  //     const introFlag = await storage.getItem('introShown');
  //     if (!introFlag) {
  //       await storage.setItem('introShown', 'true');
  //       setIsIntroVisible(true);
  //     }
  //   } catch (error) {
  //     console.log('....checkIntroFlag..error', error);
  //   }
  // }

  React.useEffect(async () => {
    retrieveUser();
    // setTimeout(()=> {
    //   checkIntroFlag();
    // }, 750)
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

  if (fetching) { 
    console.log('....fetching', fetching);
    return <ActivityIndicator size={'large'} /> 
  }

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
            <Stack.Screen name="ForgotPassword" component={ForgetPassword} options={() => ({ headerTitle: "Chatoo", headerTitleStyle: { color: colors.font.iii }, headerTintColor: `${colors.font.iii}` })} />
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


// BUILD UR APP INTO AN APK:
// npx react-native build-android
// cd android
// ./gradlew assembleRelease
// go to this path
// android/app/build/outputs/apk/release/app-release.apk