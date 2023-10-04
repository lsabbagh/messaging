import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { appendMessages, getChat } from './service';
import { URL } from '@env'

const Chat = ({ route }) => {
  const { userId, participantId, reciever } = route.params

  const [chat, setChat] = useState({ converastion: null, messages: [] });

  const fetchChat = async () => {
    console.log('....chat', chat);
    const { conversation, messages } = await getChat({ userId, participantId, title });
    const sortedMessages = messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setChat({
      conversation,
      messages: sortedMessages
    })
  }
  React.useEffect(() => {
    fetchChat();
    route.params.getReciever(reciever);
    console.log('....chat2', chat);
  }, [])

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