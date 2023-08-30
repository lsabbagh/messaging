"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const native_1 = require("@react-navigation/native");
const FontAwesome5_1 = __importDefault(require("@expo/vector-icons/FontAwesome5"));
const MaterialCommunityIcons_1 = __importDefault(require("@expo/vector-icons/MaterialCommunityIcons"));
const theme_1 = require("../../theme");
const CallItem = ({ username, picture, callStatus, time }) => {
    const navigation = (0, native_1.useNavigation)();
    return (<react_native_1.View style={styles.container}>
			<react_native_1.View style={styles.imageContainer}>
				<react_native_1.Image style={styles.image} source={{ uri: picture }}/>
			</react_native_1.View>
			<react_native_1.View style={styles.usernameAndCall}>
				<react_native_1.View style={styles.usernameAndStatus}>
					<react_native_1.Text style={styles.username}>{username}</react_native_1.Text>
					<react_native_1.View style={styles.callStatusContainer}>
						<FontAwesome5_1.default style={styles.iconStyles} name={callStatus === 0 || callStatus === 1
            ? "arrow-right"
            : "arrow-left"} size={15} color={callStatus === 0 || callStatus === 2
            ? theme_1.theme.colors.danger
            : theme_1.theme.colors.success}/>
						<react_native_1.Text style={styles.time}>{time}</react_native_1.Text>
					</react_native_1.View>
				</react_native_1.View>
				<react_native_1.View style={{ flexDirection: "row" }}>
					<react_native_1.TouchableOpacity onPress={() => navigation.navigate("MessagesScreen", {
            username: username,
            picture: picture,
        })} style={{ padding: 10 }}>
						<MaterialCommunityIcons_1.default name="chat" size={25} color={theme_1.theme.colors.primary}/>
					</react_native_1.TouchableOpacity>
					<react_native_1.TouchableOpacity onPress={() => navigation.navigate("OnCallScreen", {
            username: username,
            picture: picture,
        })} style={{ padding: 10 }}>
						<FontAwesome5_1.default name="phone" size={25} color={theme_1.theme.colors.primary}/>
					</react_native_1.TouchableOpacity>
				</react_native_1.View>
			</react_native_1.View>
		</react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingRight: 20,
        paddingLeft: 10,
        flexDirection: "row",
    },
    imageContainer: {
        borderRadius: 25,
        height: 50,
        width: 50,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    usernameAndCall: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        alignItems: "center",
    },
    usernameAndStatus: {
        paddingHorizontal: 10,
    },
    username: {
        color: theme_1.theme.colors.title,
        fontSize: 18,
    },
    callStatusContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconStyle: {
        alignSelf: 'center'
    },
    time: {
        color: theme_1.theme.colors.description,
        paddingHorizontal: 5
    }
});
exports.default = CallItem;
