import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('App'); 
    }, 750);
  }, []);

  return (
    <View style={styles.container}>
      <Image src='' style={styles.logo} />
      <Text style={styles.appName}>Your App Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', 
  },
  logo: {
    width: 100, 
    height: 100, 
  },
  appName: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Splash;
