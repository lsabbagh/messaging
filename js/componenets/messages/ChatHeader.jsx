"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const native_1 = require("@react-navigation/native");
const FontAwesome_1 = __importDefault(require("@expo/vector-icons/FontAwesome"));
const theme_1 = require("../../theme");
const ChatHeader = ({ username, bio, picture, onlineStatus, onPress }) => {
    const navigation = (0, native_1.useNavigation)();
    return (<react_native_1.View style={styles.container}>
			<react_native_1.TouchableOpacity style={styles.backButton} onPress={onPress}>
				<FontAwesome_1.default name="angle-left" size={30} color={theme_1.theme.colors.white}/>
			</react_native_1.TouchableOpacity>
			<react_native_1.View style={styles.profileOptions}>
				<react_native_1.TouchableOpacity style={styles.profile}>
					<react_native_1.Image style={styles.image} source={{ uri: picture }}/>
					<react_native_1.View style={styles.usernameAndOnlineStatus}>
						<react_native_1.Text style={styles.username}>{username}</react_native_1.Text>
						<react_native_1.Text style={styles.onlineStatus}>{onlineStatus}</react_native_1.Text>
					</react_native_1.View>
				</react_native_1.TouchableOpacity>
				<react_native_1.View style={styles.options}>
					<react_native_1.TouchableOpacity onPress={() => navigation.navigate("OnCallScreen", {
            username: username,
            picture: picture
        })} style={{ paddingHorizontal: 5 }}>
						<FontAwesome_1.default name="phone" size={30} color={theme_1.theme.colors.white}/>
					</react_native_1.TouchableOpacity>
					<react_native_1.TouchableOpacity style={{ paddingHorizontal: 20 }}>
						<FontAwesome_1.default name="ellipsis-v" size={30} color={theme_1.theme.colors.white}/>
					</react_native_1.TouchableOpacity>
				</react_native_1.View>
			</react_native_1.View>
		</react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: theme_1.theme.colors.primary,
        paddingTop: 40,
        paddingBottom: 10,
    },
    backButton: {
        alignSelf: "center",
        paddingHorizontal: 10,
    },
    profileOptions: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    profile: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#fff",
        flex: 4,
    },
    image: {
        height: 65,
        width: 65,
        borderRadius: 32.5,
    },
    usernameAndOnlineStatus: {
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    username: {
        color: theme_1.theme.colors.white,
        fontSize: 18,
        fontWeight: "bold",
    },
    onlineStatus: {
        color: theme_1.theme.colors.white,
        fontSize: 16,
    },
    options: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
});
exports.default = ChatHeader;
