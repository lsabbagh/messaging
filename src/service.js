export const getUsers = async () => {
    const response = await fetch(URL + "users/list/")
    const data = await response.json();
    return data;
};

export const getChats = async (user) => {
    const response = await fetch(URL + "conversation/list/" + user?._id)
    const data = await response.json();
    return data;
};

export const appendMessages = async ({ conversationId, messages }) => {
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

export const getChat = async ({ userId, participantId, conversationName }) => {
    const response = await fetch(URL + ['conversation', userId, participantId].join('/'), { method: 'POST', body: JSON.stringify({conversationName}) })
    const data = await response.json();
    return data;
  };