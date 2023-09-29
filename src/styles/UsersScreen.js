import { colors, sizes } from './theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    userItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    userName: {
        fontSize: sizes.par,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: sizes.smallPar,
        color: colors.bg.iii,
    },
});