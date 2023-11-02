import React from 'react'
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { URL } from '@env'
import { getUsers } from './service'
import { getStyles } from './styles/UsersScreen'
import { getColors, colors } from './styles/theme'
import { useTheme } from './styles/ThemeContext'


const Users = ({ route, navigation }) => {
    const { user, token } = route.params;
    console.log('....props', route, navigation);
    const [users, setUsers] = React.useState();

    const { name } = useTheme()
    const colors = getColors(name)
    const styles = getStyles(colors)

    const fetchUsers = async () => {
        const users = await getUsers({ userId: user._id, token })
        setUsers(users)
    }

    React.useEffect(() => {
        fetchUsers()
    }, []);

    const onSelect = (user) => {
        const _onSelect = route.params?.onSelect;
        if (_onSelect) {
            navigation.goBack()
        }
        _onSelect?.(user)
    }

    return <View style={styles.container}>
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