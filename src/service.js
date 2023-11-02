import { URL } from '@env'
import storage from './storage';

export const storageData = async () => {
    const response = await storage.load({ key: 'auth', autoSync: true, syncInBackground: true });
    console.log('....strorage data', response);
    return response;
};

export const getStorageTheme = async () => {
    const response = await storage.load({ key: 'theme', autoSync: true, syncInBackground: true });
    console.log('....strorage theme', response);
    return response;
};


export const signIn = async (username, password) => {
    const response = await fetch(URL + "login", {
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

export const logout = async ({ userId, token }) => {
    const authType = 'mbl';
    console.log('....4', userId, authType);
    const response = await fetch(URL + "logout/" + userId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
            // "userId": userId,
            // "authType": "mbl",
            // "token": token
        },
        body: JSON.stringify({ authType })
    })
    if (!response.ok) {
        console.log('....error logging out', response);
        throw new Error('Network response was not ok');
    }
    const data = response.json();
    console.log('....service..logoutt', data);
    return data;
};


export const getUsers = async ({ userId, token }) => {
    const response = await fetch(URL + "users/list", {
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
            "userid": userId,
            "authType": "mbl",
            "token": token
        }
    });

    if (response.status === 401) {
        await logout({ userId, token });
        await storage.remove({ key: 'auth' });
        throw new Error('Unauthorized: Logging out user');
    };

    const data = await response.json();
    console.log('....users', data);
    return data;
};

export const getChats = async ({ user, token }) => {
    const response = await fetch(URL + "conversation/list/" + user?._id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
            // "userid": user?._id,
            "authType": "mbl",
            "token": token
        }
    });

    if (response.status === 401) {
        await logout({ userId: user?._id, token });
        await storage.remove({ key: 'auth' });
        throw new Error('Unauthorized: Logging out user');
    };

    const data = await response.json();
    console.log('....chats', data);
    return data;
};

export const appendMessages = async ({ conversationId, messages, userId, token }) => {
    console.log('....append messages', { conversationId, messages });
    const response = await fetch(URL + 'message/append/' + conversationId, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
            "userid": userId,
            "authType": "mbl",
            "token": token
        },
        body: JSON.stringify({ messages })
    });

    if (response.status === 401) {
        await logout({ userId, token });
        await storage.remove({ key: 'auth' });
        throw new Error('Unauthorized: Logging out user');
    };

    const data = await response.json();
    console.log('....append complete', data);
    return data;
};

export const getChat = async ({ type, id, userId, token }) => {
    const response = await fetch(URL + 'conversation/' + userId, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
            "userid": userId,
            "authType": "mbl",
            "token": token
        },
        body: JSON.stringify({
            type,
            id
        })
    });

    if (response.status === 401) {
        await logout({ userId, token });
        await storage.remove({ key: 'auth' });
        throw new Error('Unauthorized: Logging out user');
    };

    const data = await response.json();
    console.log('....getchat', data);
    return data;
};



export const getProfileData = async ({ userId, token }) => {
    const response = await fetch(URL + 'users/user/profile/' + userId, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
            "userid": userId,
            "authType": "mbl",
            "token": token
        },
    });
    if (response.status === 401) {
        await logout({ userId, token });
        await storage.remove({ key: 'auth' });
        throw new Error('Unauthorized: Logging out user');
    };

    const data = await response.json();
    console.log('....getProfileData', data);
    return data;
}


export const editProfileData = async ({ userId, token, state }) => {
    console.log('....updatedData', state);
    const response = await fetch(URL + 'users/user/profile/' + userId, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
            "userid": userId,
            "authType": "mbl",
            "token": token
        },
        body: JSON.stringify(state)
    });
    if (response.status === 401) {
        await logout({ userId, token });
        await storage.remove({ key: 'auth' });
        throw new Error('Unauthorized: Logging out user');
    };

    const data = await response.json();
    console.log('....editProfileData', data);
    return data;
}