import React from 'react';
import {Text, View} from 'react-native';
import Intro from './Intro';

import Chat, {Example} from './Chat';

export default function App() {
  const [showHomePage, setShowHomePage] = React.useState(false);

  if (!showHomePage) {
    return (
      <Intro
        onDone={() => {
          setShowHomePage(true);
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
      <Example />
    </View>
  );
}
