import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, View, Text, Button, } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { URL } from '@env'
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles/ChatListScreen'
import { colors } from './styles/theme';



// @TODO: fix styles, use theme, fix title, add sign out page, add place holder text
import { FAB } from 'react-native-elements';
import storage from './storage';
import SignIn from './SignIn.screen';


export default function ChatList({ route, navigation }) {
  const { user } = route.params
  const [chats, setChats] = useState(null);

  const navigator = useNavigation();

  const fetchChats = async () => {
    const _chats = await getChats(user)
    setChats(_chats)
  }
  React.useEffect(() => {
    fetchChats()
  }, [])

  const onSelect = participant => {
    navigator.navigate('Chat', {
      userId: user._id,
      participantId: participant._id
    })
  }

  const onButtonPress = async () => {
    route.params.onSignOut()
  }

  return (
    <View style={styles.container}>
      <Button onPress={onButtonPress} title="Sign Out" style={styles.Button}>hello</Button>
      <FlatList
        data={chats}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View style={{}}>
            <Text style={{}}>{item.title}</Text>
          </View>
        )}
      />
      {!chats?.length && <Text> no items found</Text>}
      <FAB title="+" placement='right' type='solid' color={colors.bg.v}
        onPress={() => {
          navigation.navigate('Users', { onSelect })
        }} />


    </View>
  );
}


const getChats = async (user) => {
  const response = await fetch(URL + "conversation/list/" + user?._id)
  const data = await response.json();
  return data;
};