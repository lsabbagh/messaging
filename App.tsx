import React from "react";
import { ImageBackground, StatusBar, StyleSheet, View } from "react-native";
export default function App(){
  return(
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
      source={require('./assets/images/Hey.png')}
      resizeMode='cover'
      style={{flex: 1}}>
      </ImageBackground>
    </View>
  );
  }



const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    backgroundColor:'#fff',},
  }
);

