import { URL } from '@env'
import storage from './storage';

export const signIn = async (username, password) => {
    const response = await fetch(URL + "auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
        },
        body: JSON.stringify({ username, password })
    })
    const data = await response.json();
    console.log('....data ser', data);
    return data;
};

export const logout = async (userId) => {
    console.log('....4', userId);
    const response = await fetch(URL + "auth/logout/" + userId, {
        method: "DELETE",
    })
    if (!response.ok) {
        console.log('....error logging out',);
        throw new Error('Network response was not ok');
    }
    const data = response.json();
    console.log('....logoutt', data);
    return data;
}

export const storageData = async () => {
    const response = await storage.load({ key: 'auth', autoSync: true, syncInBackground: true });
    console.log('....strorage data', response);
    return response;
}

export const getUsers = async () => {
    const response = await fetch(URL + "users/list")
    const data = await response.json();
    return data;
};

export const getChats = async (user) => {
    const response = await fetch(URL + "conversation/list/" + user?._id)
    const data = await response.json();
    console.log('....chats', data);
    return data;
};

export const appendMessages = async ({ conversationId, messages }) => {
    console.log('....append messages', { conversationId, messages });
    const response = await fetch(URL + 'message/append/' + conversationId, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
        },
        body: JSON.stringify({ messages })
    })

    const data = await response.json();
    console.log('....append complete', data);
    return data;

}

export const getChat = async ({ type, id, userId }) => {
    const response = await fetch(URL + 'conversation/' + userId, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
        },
        body: JSON.stringify({
            type,
            id
        })
    })
    const data = await response.json();
    console.log('....data', data);
    return data;
};

// export const getGroupChat = async ({ userId, conversationId }) => {
//     console.log('....getGroupChat', '\n', userId, '\n', conversationId);
//     const response = await fetch(URL + 'conversation/groups/' + userId, {
//         method: 'POST',
//         body: JSON.stringify({conversationId}),
//     })
//     console.log('....half gone group', response);
//     const data = await response.json();
//     console.log('....group data', data);
//     return data;
// };
