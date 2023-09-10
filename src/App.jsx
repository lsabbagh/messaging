import React from 'react';
import {Text, View} from 'react-native';
import Intro from './Intro';

import Chat, {Example} from './Chat';
import SignIn from './SignIn';

export default function App() {
  const [showHomePage, setShowHomePage] = React.useState(false);
// @TODO: change this code to see different images
  // if (!showHomePage) {
  //   return (
  //     <Intro
  //       onDone={() => {
  //         setShowHomePage(true);
  //       }}
  //     />
  //   );
  // }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
        <SignIn />
      {/* <Example /> */}
    </View>
  );
}
