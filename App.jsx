import React, { useState } from "react";
import { ImageBackground,StatusBar, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { COLORS, SIZES } from "./Compose/theme";
import { Colors } from "react-native/Libraries/NewAppScreen";
const slides = [{
 id: 1,
 image:require('./assets/images/Hey.png')
  },
  {
    id: 2,
 image:require('./assets/images/2.png')
  },
{
  id: 3,
 image:require('./assets/images/3.png')
  }
]

export default function App(){
  const [showHomePage, setShowHomePage] = useState(false);
  const buttonLabel = (labell) => {
    return(
        <View>
            <Text>
                {labell}
            </Text>
        </View>
    )
  }
  if(!showHomePage){
    return(
    <AppIntroSlider
    data={slides}
    renderItem={({item}) => {
        return(
            <View style={{
                flex: 1,
                alignItems: 'center',
            }}
            >
                <ImageBackground
                source={item.image}
                style={{
                     width: SIZES.width , 
                    height : SIZES.height,
                }}
                />
            </View>
        )
            }}
            activeDotStyle={{
                backgroundColor: COLORS.primary,
                width: 30,
            }}
            renderNextButton={() => buttonLabel("Next")}
            renderSkipButton={() => buttonLabel("Skip")}
            renderDoneButton={() => buttonLabel("Done")}
            onDone={() => {
                setShowHomePage(true);
            }}
            />
            )}
  return(
    <View style={{
     flex: 1,
     justifyContent: 'center',
    }}
    >
    </View>
    )
}