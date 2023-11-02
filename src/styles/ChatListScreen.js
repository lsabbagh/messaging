import { getColors, sizes } from './theme';
import { StyleSheet } from 'react-native';

export const getStyles = (colors) => StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.bg.i,
    },
    button: {
        backgroundColor: colors.bg.i,
        color: colors.font.i,
    },
    addChat: {
        backgroundColor: colors.bg.i,
        color: colors.font.i,
    },
    noItems: {
        fontSize: sizes.huge,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        bottom: 50,
        color: colors.font.iv
    },
    chatButton: {
        width: '100%',
        padding: 20,
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: colors.font.iv,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    } ,
    profilePic: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 10,
        top: 1,
    },
    chatName: {
        fontSize: sizes.par,
        color: colors.font.iii,
    },
    timeStamp: {
        fontSize: 10,
        color: colors.font.iv,
    },
})