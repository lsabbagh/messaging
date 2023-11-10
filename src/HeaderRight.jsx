import React from 'react'
import storage from './storage';
import { Button, TouchableOpacity, View, Text } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/Entypo';
import { logout, storageData } from './service';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from './styles/ThemeContext';
import { getColors, colors } from './styles/theme';
import { getStyles } from './styles/HeaderRight';

const HeaderRight = ({ data, visibleMenu, setVisibleMenu, onLogOut, onThemeChange }) => {

    const navigator = useNavigation()
    const user = data?.user;
    const token = data?.token
    console.log('....HeaderRight', { data, visibleMenu });

    const { name, toggle } = useTheme();
    const colors = getColors(name);
    const styles = getStyles(colors)

    const changeTheme = () => {
        console.log('....changeTheme',);
        toggle()
        console.log('....changeTheme..next', name);
        setVisibleMenu(false)
    }

    const handleLogout = async (_user) => {
        console.log('....logout began', _user);
        await logout({ userId: _user._id, token });
        console.log('....logout1',);
        await storage.remove({ key: 'auth' });
        console.log('....logout2',);
        onLogOut()
        console.log('....logout successful');
    }


    return (
        <View style={styles.container}>
            {/* <Text>{name}</Text> */}
            <Menu
                visible={visibleMenu}
                anchor={
                    <Icon
                        name="dots-three-vertical"
                        size={20}
                        color={colors.font.iii}
                        onPress={() => setVisibleMenu(true)}
                    />
                }
                style={styles.menu}
                onRequestClose={() => setVisibleMenu(false)}
            >
                <MenuItem textStyle={styles.item} onPress={() => navigator.navigate('Profile')}>My Profile</MenuItem>
                <MenuItem textStyle={styles.item} onPress={changeTheme}>Change Theme</MenuItem>
                <MenuItem textStyle={styles.item} onPress={() => handleLogout(user)}>Log Out</MenuItem>
            </Menu>
        </View>
    )
}

export default HeaderRight