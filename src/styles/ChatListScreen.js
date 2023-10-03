import { colors, sizes } from './theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.bg.l,
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
    },
    chatButton: {
        width: '100%',
        padding: 20,
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: colors.font.iv,
    },
    chatName: {
        fontSize: sizes.par,
        color: colors.font.iii,
    },
})