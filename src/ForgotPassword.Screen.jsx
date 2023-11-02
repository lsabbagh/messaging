import { FlatList, View, Text, Button, LogBox, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from './styles/ThemeContext';
import { getColors, colors } from './styles/theme';
import { getStyles } from './styles/SignInScreen';



export default function ForgetPassword() {
    const [state, setState] = React.useState({
        username: '',
        email: '',
    })
    const set = newState => setState(state => ({ ...state, ...newState }))
    console.log('....', state);

    // const { name } = useTheme()
    // const colors = getColors(name)
    const styles = getStyles(colors)

    const onPressLogin = async () => {
        const response = await forgetPass(state.username, state.password)

    }

    return (
        <View>
            <Text>Your password will be sent to your email</Text>
            <Text>To confirm that's you please enter your email:</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    // value={state.username}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => set({ username: text })} />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => set({ email: text })} />
            </View>

            <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
                <Text>Send Email</Text>
            </TouchableOpacity>
        </View>
    )
}

const forgetPass = async (username, email) => {
    const response = await fetch(URL + "users/forgetpassword", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
        },
        body: JSON.stringify({ _username, _password })
    })
    const data = await response.json();
    return data;
};