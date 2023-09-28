import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import storage from './storage';

export default function SignOut() {
    const navigation = useNavigation();

    const signOut = async () => {
        // Perform the sign-out logic here, e.g., clear user data from storage
        await storage.remove({ key: 'user' });

        // Navigate to the sign-in screen or any other desired screen
        navigation.navigate('SignIn');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Are you sure you want to sign out?</Text>
            <Button title="Sign Out" onPress={signOut} />
        </View>
    );
}
