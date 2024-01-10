import {colors, sizes} from './theme';
import {StyleSheet} from 'react-native';

export const getStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bg.ii,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textContainer:{
      marginBottom: 50,
      alignContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    text: {
      color: colors.font.iii,
      fontSize: sizes.par,
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      textAlign: 'center',
    },
    highlighedText: {
      color: colors.font.iii,
      fontWeight: '500',
      textAlign: 'center',
    },
    title: {
      fontWeight: 'bold',
      fontSize: sizes.huge,
      color: colors.font.s,
      marginBottom: 40,
    },
    inputView: {
      width: '80%',
      backgroundColor: '#ababab',
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: 'center',
      padding: 20,
    },
    inputText: {
      height: 50,
      color: colors.font.i,
    },
    forgotAndSignUpText: {
      color: colors.font.iii,
      fontSize: sizes.small,
    },
    submitBtn: {
      width: '80%',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 10,
      backgroundColor: colors.bg.vi,
      color: colors.font.d,
      fontSize: sizes.title,
      fontWeight: 'bold',
    },
  });
