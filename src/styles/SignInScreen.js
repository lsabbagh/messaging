import { colors, sizes } from './theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg.ii,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: "bold",
    fontSize: sizes.huge,
    color: colors.font.s,
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#ababab",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: colors.font.i
  },
  forgotAndSignUpText: {
    color: colors.font.iii,
    fontSize: sizes.small,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: colors.bg.vi,
    color: colors.font.d,
    fontSize: sizes.title,
    fontWeight: 'bold',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // height: '20%',
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: colors.bg.vi,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: sizes.par,
    color: colors.font.iii,
  },
  modalTextStyle: {
    fontSize: sizes.smallPar,
    color: colors.font.iii,
  },
});