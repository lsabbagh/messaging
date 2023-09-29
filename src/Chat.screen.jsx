import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

import { URL } from '@env'

const Chat = ({ route }) => {
  const { userId, participantId } = route.params

  const [chat, setChat] = useState({ converastion: null, messages: [] });

  const fetchChat = async () => {
    const { conversation, messages } = await getChat({ userId, participantId })
    setChat({
      conversation,
      messages
    })
  }

  React.useEffect(() => { fetchChat() }, [])

  const append = async (newMessages) => {
    await appendMessages({ 
      conversationId: chat?.conversation?._id,
      messages: newMessages
    })
    fetchChat()
  }

  return (
    <GiftedChat
      messages={chat?.messages}
      onSend={messages => append(messages)}
      user={{_id: userId}}
    />
  );
}

export default Chat

const getChat = async ({ userId, participantId }) => {
  const response = await fetch(URL + ['conversation', userId, participantId].join('/'), { method: 'POST' })
  const data = await response.json();
  return data;
};

const appendMessages = async ({ conversationId, messages }) => {
  const response = await fetch(URL + 'message/append/' + conversationId, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
    },
    body: JSON.stringify({ messages })
  })

  const data = await response.json();
  return data;

}