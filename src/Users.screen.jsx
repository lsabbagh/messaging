import React from 'react'
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { styles } from './styles/UsersScreen'
import { URL } from '@env'
// @TODO: fix title (select user), fix style?!

const Users = ({route, navigation}) => {

    const [users, setUsers] = React.useState()
    const fetchUsers = async () => {
        const users = await getUsers()
        setUsers(users)
    }

    React.useEffect(() => {
        fetchUsers()
    }, [])
    const onSelect = (user) => {
        const _onSelect = route.params?.onSelect;
        if(_onSelect) {
            navigation.goBack()
        }
        _onSelect?.(user)
    }
    return <View>
        <FlatList
            data={users}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.userItem} onPress={() => onSelect(item)}>
                    <Text style={styles.userName}>{item.username}</Text>
                    <Text style={styles.userEmail}>{item.email}</Text>
                </TouchableOpacity>
            )}
        />
    </View>

}

export default Users

// const getUsers = async () => {
//     const response = await fetch(URL + "users/list/")
//     const data = await response.json();
//     return data;
// };

