import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, View, Text, Button, TouchableOpacity, } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { URL } from '@env'
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles/ChatListScreen'
import { colors } from './styles/theme';
import { getUsers, getChats } from './service';


// @TODO: fix styles, use theme, fix title, add sign out page, add place holder text
import { FAB } from 'react-native-elements';
import storage from './storage';
import SignIn from './SignIn.screen';


export default function ChatList({ route, navigation }) {
  const { user } = route.params
  const [chats, setChats] = useState(null);

  const navigator = useNavigation();

  const fetchChats = async () => {
    console.log('....user2');
    const _chats = await getChats(user)
    console.log('....user', _chats);
    setChats(_chats)
  }
  React.useEffect(() => {
    console.log('....useeffect');
    fetchChats()
  }, [])

  const onSelect = participant => {
    console.log('par', participant);
    const conversationName = participant.username;
    navigator.navigate('Chat', {
      userId: user._id,
      participantId: participant._id,
      conversationName,
    })
  }

  const onChatSelect = (item) => {

  }

  const onButtonPress = async () => {
    route.params.onSignOut()
  }

  console.log('.....chats', chats)
  return (
    <View style={styles.container}>
      <Button onPress={onButtonPress} title="Sign Out" style={styles.Button}>hello</Button>
      <FlatList
        data={chats}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatButton} onPress={onChatSelect(item)}>
            <Text style={styles.chatName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {!chats?.length && <Text style={styles.noItems} > No Chats Found</Text>}
      <FAB title="+" placement='right' type='solid' color={colors.bg.v}
        onPress={() => {
          navigation.navigate('Users', { onSelect })
        }} />


    </View>
  );
}


// const getChats = async (user) => {
//   const response = await fetch(URL + "conversation/list/" + user?._id)
//   const data = await response.json();
//   return data;
// };