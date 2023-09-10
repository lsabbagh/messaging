import { StyleSheet,Dimensions } from "react-native";
const {width, height } = Dimensions.get("screen");
const style = StyleSheet.create({
    bg: {
        width: "100%",
        height: "100%",
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 80,
        height: height/1.05,
    },
    centralHeaderItem: {
        flex:0.7,
        textAlign: "center",
    },
    h1: {
        fontSize: 40,
        fontWeight: "bold",
    },
    inputContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    button: {
        fontWeight: "bold",
    },
    submitContainer:{
        marginTop: 30,
        alignItems:"flex-end",
        justifyContent: "flex-end",
        width: "100%",
    },
    headerContainer: {
        flexDirection: "row",
        width: "100%",
        height: height/10,
    },
    input: {
        width: width/1.15,
        borderBottomWidth: 2,
        borderBottomColor: "#aaa",
        padding: 10,
        marginVertical: 20,
    },
});
export {style};