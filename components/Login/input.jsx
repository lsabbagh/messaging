import React from "react";
import { View, Text, TextInput } from "react-native";
import { style } from "./style";
export function Input({placeholdr, onCHangeText, onFocus, onBlur}){
    return (
        <View style= {style.input}>
            <TextInput
            onFocus={onFocus}
            onBlur={onBlur}
            style={{ fontSize: 18, textAlign: "center"}}
            placeholder={placeholdr}
            placeholderTextColor="#aaa"
            onChangeText={(Text) => onCHangeText(text)}/>
        </View>
    );
}