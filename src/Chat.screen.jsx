import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, InputToolbar, Bubble } from 'react-native-gifted-chat';
import { appendMessages, getChat } from './service';
import { URL } from '@env'

const Chat = ({ route }) => {
  const { user, participantId, conversationId, type, receiver, token } = route.params
  const [chat, setChat] = useState({ converastion: null, messages: [] });

  console.log('....check', { user, participantId, conversationId, type, receiver });

  let id = participantId

  const fetchChat = async () => {
    if (type === 'conversation') {
      id = participantId
    } else if (type === 'group') {
      id = conversationId
    }
    console.log('....chat', chat, receiver);

    const data = await getChat({ type, id, userId: user._id, token });
    console.log('....2nd conv', data);

    const { conversation, messages } = data
    const sortedMessages = messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    console.log('....sorted messages', sortedMessages);
    setChat({
      conversation,
      messages: sortedMessages
    })
  }
  React.useEffect(() => {
    fetchChat();
    route.params.getReceiver(receiver);
    console.log('....chat2', chat);
  }, [])

  const append = async (newMessages) => {
    await appendMessages({
      conversationId: chat?.conversation?._id,
      messages: newMessages,
      userId: user?._id,
      token
    })
    fetchChat()
  }

  console.log('....chat3', chat);
  return (
    <GiftedChat
      messages={chat?.messages}
      onSend={messages => append(messages)}
      user={{ _id: user._id, name: user.username }}
      renderUsernameOnMessage={true}
      // renderAvatarOnTop
      textInputStyle={{
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 0.8,
        borderColor: '#bbb',
        paddingHorizontal: 12,
        marginTop: 4,
        marginBottom: 6,
        marginRight: 4,
        marginLeft: 6,
      }}
      renderInputToolbar={(props) => {
        return (
          <InputToolbar
            containerStyle={{ backgroundColor: '#f6f6f6' }}
            {...props}
          />
        )
      }}
      scrollToBottom
      infiniteScroll
    />
  );
}

export default Chat