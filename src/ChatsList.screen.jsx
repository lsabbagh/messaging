import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, View, Text, Button, } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {URL} from '@env'
import { useNavigation } from '@react-navigation/native';




// @TODO: fix styles, use theme, fix title, add sign out page, add place holder text
import { FAB } from 'react-native-elements';
import storage from './storage';
import SignIn from './SignIn.screen';


export default function ChatList({ route, navigation }) {
  const [chats, setChats] = useState(null);

  const navigator = useNavigation();

  const fetchChats = async () => {
    const _chats = await getChats(route.params.user)
    setChats(_chats)
  }
  React.useEffect(() => {
    fetchChats()
  }, [])

  const onSelect = user => {
    navigator.navigate('Chat', {userId: user._id})
  }

  const onButtonPress = async () => {
    route.params.onSignOut()
  }

  return (
    <View style={{ width: '100%', height: '100%', backgroundColor: "lightgreen" }}>
      <Button onPress={onButtonPress} title="Sign Out">hello</Button>
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
      <FAB title="+" placement='right' style={{}} type='solid'
        onPress={() => {
          navigation.navigate('Users', {onSelect})
        }} />


    </View>
  );
}


const getChats = async (user) => {
  const response = await fetch(URL + "conversation/list/" + user._id)
  const data = await response.json();
  console.log('....', data)
  return data;
};