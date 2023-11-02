import React from 'react';
import { View } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/Entypo';




const ChatHeaderRight = () => {
  return (
    <Menu
      visible={visibleMenu}
      anchor={
        <Icon
          name="dots-three-vertical"
          size={20}
          color="black"
          onPress={() => setVisibleMenu(true)}
        />
      }
      onRequestClose={() => setVisibleMenu(false)}
    >
      <MenuItem onPress={() => navigator.navigate('Profile')}>My Profile</MenuItem>
      <MenuItem onPress={changeTheme}>Change Theme</MenuItem>
      <MenuItem onPress={() => handleLogout(user)}>Log Out</MenuItem>
    </Menu>
  )
}

export default ChatHeaderRight