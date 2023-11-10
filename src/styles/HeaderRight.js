import { colors, sizes } from './theme';
import { StyleSheet } from 'react-native';

export const getStyles = (colors) => StyleSheet.create({
    container: {
        height: 'auto', 
        width: 'auto',
        marginRight: 3, 
        backgroundColor: colors.bg.i,
    },
    menu: {
        backgroundColor: colors.bg.i,
        shadowColor: colors.font.vi,//'white',
        // color: colors.font.s,
    },
    item: {
        color: colors.font.iii,
        fontWeight: '400',
        // backgroundColor: 'red',
    }
})