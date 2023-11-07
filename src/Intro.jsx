import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from './styles/ThemeContext';
import { getColors } from './styles/theme';

import App from './App';



const Intro = () => {
  const { name } = useTheme();
  const colors = getColors(name);
  const styles = getStyles(colors)

  const navigation = useNavigation();
  // const imageSrc = name == 'light' ? './styles/images/chatoo-light.jpeg' : null//require('./styles.images/chatoo-dark.jpeg')
  const imageSources = {
    light: require('./styles/images/chatoo-light.jpeg'),
    dark: require('./styles/images/chatoo-dark.jpeg'),
  };
  
  const imageSrc = imageSources[name];

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate('App');
  //   }, 750);
  // }, []);

  return (
    <View style={styles.container}>
      <Image source={imageSrc} style={styles.logo} />
      {/* <Text style={styles.appName}>Your App Name</Text> */}
    </View>
  );
};

const getStyles = (colors) => StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bg.vii,
    // backgroundColor: 'red',
  },
  logo: {
    // width: 100,
    // height: 100,
  },
  appName: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Intro;
