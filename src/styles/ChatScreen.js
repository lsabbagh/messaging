import { colors, sizes } from './theme';
import { StyleSheet } from 'react-native';

export const getStyles = (colors) => StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        // backgroundColor: colors.bg.i
    },
    sendBtn: {
        // paddingBottom: 20,
        // marginBottom: 10,
        marginRight: 5,
        bottom: 8,
        position: 'relative',
        backgroundColor: colors.bg.ii,
        borderRadius: 18
    },
    image: {
        flex: 1
    },
})