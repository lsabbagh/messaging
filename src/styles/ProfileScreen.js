import { colors, sizes } from './theme';
import { StyleSheet, Platform } from 'react-native';


export const getStyles = (colors) => StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: colors.bg.ii,
    },
    profilePicContainer: {
        height: '40%',
        // backgroundColor: 'lightblue',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    profilePic: {
        height: 240,
        width: 240,
        // backgroundColor: 'lightred',
        borderColor: colors.font.v,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 120,
        shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    inputView: {
        // backgroundColor: 'blue',
        width: "80%",
        // right: '10%',
        backgroundColor: colors.bg.i,//"#ababab",
        borderRadius: 25,
        borderColor: colors.font.v,
        borderStyle: 'solid',
        borderWidth: 1,
        height: 50,
        marginBottom: 20,
        marginLeft: '10%',
        justifyContent: "center",
        alignItems: 'center',
        padding: 20
    },
    input: {
        width: '100%',
        // backgroundColor: 'red',
        margin: 5,
        height: 50,
        color: colors.font.iii

    },
    submitBtnContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        // backgroundColor: 'red',
    },
    submitBtn: {
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10,
        backgroundColor: colors.bg.vi,
        color: colors.font.s,
        fontSize: sizes.title,
        fontWeight: 'bold',
    },
})