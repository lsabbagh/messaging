export default chatWithTimeStamp = _chats => {
  const sortedChatsWithTimeStamp = _chats?.map(chat => {
    let lastMessageDate = chat?.lastMessage;
    // const distanceToNow = chat?.lastMessage && distanceInWordsToNow(new Date(chat.lastMessage))
    const lastMessage = new Date(lastMessageDate);
    if (!(lastMessage instanceof Date)) {
      chat.lastMessage = null;
      return chat;
    }
    const currentTime = new Date();
    if (isNaN(lastMessage)) {
      chat.lastMessage = null;
      return chat;
    }
    const year = lastMessage.getFullYear();
    const month = lastMessage.getMonth();
    const day = lastMessage.getDate();
    const formattedDate = `${day}/${month}/${year}`;
    if (lastMessage.getFullYear() === currentTime.getFullYear()) {
      if (lastMessage.getMonth() === currentTime.getMonth()) {
        if (lastMessage.getDate() === currentTime.getDate()) {
          const hours = lastMessage.getHours();
          const minutes = lastMessage.getMinutes();
          const formattedTime = `${hours}:${minutes}`;
          chat.lastMessage = formattedTime;
          return chat;
        }
        chat.lastMessage = formattedDate;
        return chat;
      }
      chat.lastMessage = formattedDate;
      return chat;
    }
    chat.lastMessage = formattedDate;
    return chat;
  });

  return sortedChatsWithTimeStamp;
};
