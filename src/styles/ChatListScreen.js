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
})