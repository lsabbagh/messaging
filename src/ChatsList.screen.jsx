import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { URL } from '@env'
import { useNavigation } from '@react-navigation/native';
import { getChats } from './service';
import { FAB } from 'react-native-elements';
import storage from './storage';
import { getStyles } from './styles/ChatListScreen'
import { getColors, colors } from './styles/theme';
import { useTheme } from './styles/ThemeContext';


export default function ChatList({ route, navigation }) {
  const { user, token } = route.params
  const [chats, setChats] = useState(null);
  const { name } = useTheme()
  const colors = getColors(name)
  const styles = getStyles(colors)

  const navigator = useNavigation();

  const fetchChats = async () => {
    const _chats = await getChats({ user, token })
    let sortedChats = _chats.slice().sort((a, b) => new Date(b.lastMessage) - new Date(a.lastMessage));

    const sortedChatsWithTimeStamp = sortedChats?.map(chat => {
      let lastMessageDate = chat?.lastMessage;
      const lastMessage = new Date(lastMessageDate)
      if (!(lastMessage instanceof Date)) return null
      const currentTime = new Date();
      if (isNaN(lastMessage)) return;
      if (lastMessage.getFullYear() === currentTime.getFullYear()) {
        const year = lastMessage.getFullYear();
        const month = lastMessage.getMonth();
        const day = lastMessage.getDate();
        const formattedDate = `${day}/${month}/${year}`
        console.log('....time..year.match', lastMessage.getFullYear());
        if (lastMessage.getMonth() === currentTime.getMonth()) {
          console.log('....time..month.match', lastMessage.getMonth());
          if (lastMessage.getDate() === currentTime.getDate()) {
            console.log('....time..day.match', lastMessage.getDate());
            const hours = lastMessage.getHours();
            const minutes = lastMessage.getMinutes();
            const formattedTime = `${hours}:${minutes}`;
            chat.lastMessage = formattedTime;
            return chat
          } else {
            chat.lastMessage = formattedDate;
            return chat
          }
        } else {
          chat.lastMessage = formattedDate;
          return chat
        }
      } else {
        chat.lastMessage = formattedDate;
        return chat
      }
    })

    console.log('....fetch..chats', { _chats, sortedChats, sortedChatsWithTimeStamp });
    setChats(sortedChatsWithTimeStamp)
  }
  React.useEffect(() => {
    fetchChats()
  }, [])

  const onSelect = participant => {
    console.log('....par', participant);
    // const conversationName = participant.username;
    navigator.navigate('Chat', {
      user,
      participantId: participant._id,
      type: "conversation",
      receiver: participant.username,
      profile: participant.profilePic
    })
  }

  const onChatSelect = (converastion) => {
    console.log('....par', user, '\n', 'pp', converastion);
    const type = converastion.item.type;
    const title = type === 'group' ? converastion.item.title : converastion.item.otherParticipant.username
    const profile = type === 'group' ? converastion.item.profilePic : converastion.item.otherParticipant.profilePic
    navigator.navigate('Chat', {
      user,
      participantId: converastion.item.otherParticipant._id,
      conversationId: converastion.item._id,
      type,
      receiver: title,
      profile,
      // conversationName,
    })
    console.log('....receiver', title);
  }

  // const onButtonPress = async () => {
  //   route.params.onSignOut()
  // }

  console.log('....chatsList', chats)
  return (
    <View style={styles.container}>
      {/* <Button onPress={onButtonPress} title="Sign Out" style={styles.Button}>hello</Button> */}
      <FlatList
        data={chats}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatButton} onPress={() => onChatSelect({ item })}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.profilePic}
                src={item.type === 'group' ? item.profile : (item.otherParticipant?.profilePic)}
                resizeMode='contain'
              />
              <Text style={styles.chatName}>
                {item.type === 'group' ? item.title : (item.otherParticipant?.username)}
              </Text>
            </View>
            <Text style={styles.timeStamp}>
              {item.lastMessage}
            </Text>
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