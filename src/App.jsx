import React from 'react';
import {Text, View} from 'react-native';
import Intro from './Intro';
import login from '../components/Login/loginPage';
export default function App() {
  const [showHomePage, loginPage] = React.useState(false);

  if (!showHomePage) {
    return (
      <Intro
        onDone={() => {
         loginPage
         (true);
        }}
      />
    );
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
     
    </View>
  );
}
