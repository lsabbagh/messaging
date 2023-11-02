import { colors, sizes } from './theme';
import { StyleSheet } from 'react-native';

export const getStyles = (colors) => StyleSheet.create({
    container: {
        backgroundColor: colors.bg.ii,
    },
    userItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.font.v,
    },
    userName: {
        fontSize: sizes.par,
        // fontWeight: 'bold',
        color: colors.font.iii,
    },
    userEmail: {
        fontSize: sizes.smallPar,
        color: colors.font.iv,
    },
});