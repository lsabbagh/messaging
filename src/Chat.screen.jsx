import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, InputToolbar, Bubble, Send } from 'react-native-gifted-chat';
import { appendMessages, getChat } from './service';
import { URL } from '@env'
import { View } from 'react-native';
import { getColors, sizes, colors } from './styles/theme';
import { getStyles } from './styles/ChatScreen';
import { useTheme } from './styles/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Chat = ({ route }) => {
  const { user, participantId, conversationId, type, receiver, token, profile } = route.params
  const [chat, setChat] = useState({ converastion: null, messages: [] });
  const [backgroundColor, setBackgroundColor] = React.useState('')

  console.log('....check', { user, participantId, conversationId, type, receiver });

  const { name } = useTheme()
  const colors = getColors(name)
  const styles = getStyles(colors)

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
    // console.log('....chat2', chat);
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

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <Icon name='send-circle' size={35} color={colors.font.s} style={styles.sendBtn} />
        </View>
      </Send>
    )
  };

  const renderBubble = props => (
    <Bubble
      {...props}
      usernameStyle={{ color: 'black', fontWeight: '200' }}
    // tickStyle={{color: 'red'}}
    />
  )

  const textInputStyle = {
    backgroundColor: colors.bg.ii,//'lightgrey',
    color: colors.font.iii,
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: colors.bg.iii,
    paddingHorizontal: 12,
    marginTop: 4,
    marginBottom: 6,
    marginRight: 4,
    marginLeft: 6,
  }

  // const backgroundColor = 'indigo'

  console.log('....chat3', { chat, receiver, profile });
  return (
    <View style={styles.container}>
      <GiftedChat
        messages={chat?.messages}
        onSend={messages => append(messages)}
        user={{ _id: user._id, name: user.username, avatar: profile }}
        renderUsernameOnMessage={type === 'group' ? true : false}
        textInputStyle={textInputStyle}
        renderInputToolbar={(props) => {
          return (
            <InputToolbar
              containerStyle={{ background: 'none', border: 'none', backgroundColor: colors.bg.i }}
              {...props}
            />
          )
        }}
        renderSend={renderSend}
        renderBubble={renderBubble}
        // showAvatarForEveryMessage={true}
        renderAvatarOnTop
        // showUserAvatar
        alwaysShowSend
        scrollToBottom
        infiniteScroll
        messagesContainerStyle={{ backgroundColor: backgroundColor, border: 'none' }}  // background color
      />
    </View>
  );
}

export default Chat