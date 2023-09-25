import React, {Component} from "react";
import { View,Text, ImageBackground, Button } from "react-native";
import Style, { style } from './style';
import Chat from '../../src/Chat';
export default class App extends Component{
   state={
    blur: 10,
    alpha: 0,
   };
    render(){
        const {blur, alpha} = this.state;
        return (
            <ImageBackground source={require('./assets/images/4.png')}
            style={style.bg}
            blurRadius={blur}>
    <View
       style={[
        style.container,
        {backgroundColor: 'rgba(255,255,255,${alpha})'},
       ]}>
       <View style= {style.inputContainer}>
        <Text style={style.h1}>LOGIN</Text>
        </View>
        <View>
        <input placeholder={"Username"}/>
        <input placeholder={"Password"}/>
        </View>
        <View style={style.submitContainer}>
            <Button
            textColor= "#fff"
            text={"ENTER >"}
            onPress={Chat}/>
        </View>
       </View>
            </ImageBackground>
        )
    }
}