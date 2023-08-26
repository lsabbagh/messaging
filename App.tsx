import React, { useState } from "react";
import { ImageBackground, StatusBar, StyleSheet, View } from "react-native";
const slides = [{
 id: 1,
 ImageBackground:require('./assets/images/Hey.png')
  },
  {
    id: 2,
 ImageBackground:require('./assets/images/2.png')
  },
{
  id: 3,
 ImageBackground:require('./assets/images/3.png')
  }
]

export default function App(){
  const [showHomePage, setShowHomePage] = useState(false);
  if(!showHomePage){
    return(
      <AppIntoSlider/></AppIntoSlider>
    )
  }
  return(
    <View style={{
     flex: 1,
     justifyContent: 'center',
     
    }}
  
    />)}


