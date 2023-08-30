"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const native_1 = require("@react-navigation/native");
const ProfileInfo_1 = __importDefault(require("./common/ProfileInfo"));
const theme_1 = require("../theme");
const ConversationItem = ({ picture, username, bio, lastMessage, time, isBlocked, isMuted, notification, hasStory }) => {
    const [modalVisible, setModalVisible] = (0, react_1.useState)(false);
    const navigation = (0, native_1.useNavigation)();
    const showStoryCircle = () => {
        if (hasStory) {
            return {
                borderColor: theme_1.theme.colors.storyBorder,
                borderWidth: 2
            };
        }
    };
    const showNotification = (type) => {
        if (notification && type === "number") {
            return (<react_native_1.View style={styles.notificationCircle}>
					<react_native_1.Text style={styles.notification}>{notification}</react_native_1.Text>
				</react_native_1.View>);
        }
        else if (notification && type === "imageCircle") {
            return {
                borderColor: theme_1.theme.colors.primary
            };
        }
    };
    return (<react_native_1.View style={styles.container}>
			<react_native_1.TouchableOpacity style={styles.conversation} onPress={() => navigation.navigate('MessagesScreen', {
            username: username,
            bio: bio,
            picture: picture,
            isBlocked: isBlocked,
            isMuted: isMuted
        })}>
				<react_native_1.TouchableOpacity onPress={() => setModalVisible(currentValue => !currentValue)} style={[styles.imageContainer, showStoryCircle()]}>
					<react_native_1.Image style={styles.image} source={{ uri: picture }}/>
				</react_native_1.TouchableOpacity>
				<react_native_1.View style={{
            flex: 1,
            justifyContent: 'center'
        }}>
					<react_native_1.View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
						<react_native_1.Text numerOfLine={1} style={styles.username}>{username}</react_native_1.Text>
						<react_native_1.Text style={styles.time}>{time}</react_native_1.Text>
					</react_native_1.View>
					<react_native_1.View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
						<react_native_1.Text style={styles.message}>{lastMessage}</react_native_1.Text>
						{showNotification('number')}
					</react_native_1.View>
				</react_native_1.View>
			</react_native_1.TouchableOpacity>
			<react_native_1.Modal animationType="slide" transparent visible={modalVisible}>
				<ProfileInfo_1.default username={username} picture={picture} bio={bio} isBlocked={isBlocked} isMuted={isMuted} hide={() => setModalVisible(false)}/>
			</react_native_1.Modal>
		</react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: {},
    conversation: {
        flexDirection: 'row',
        paddingBottom: 25,
        paddingRight: 20,
        paddingLeft: 10
    },
    imageContainer: {
        marginRight: 15,
        borderRadius: 25,
        height: 50,
        width: 50,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    image: {
        height: 55,
        width: 55
    },
    username: {
        fontSize: theme_1.theme.fontSize.title,
        color: theme_1.theme.colors.title,
        width: 210
    },
    message: {
        fontSize: theme_1.theme.fontSize.message,
        width: 240,
        color: theme_1.theme.colors.subTitle
    },
    time: {
        fontSize: theme_1.theme.fontSize.subTitle,
        color: theme_1.theme.colors.subTitle,
        fontWeight: '300'
    },
    notificationCircle: {
        backgroundColor: theme_1.theme.colors.primary,
        borderRadius: 50,
        height: 20,
        width: 20,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    notification: {
        color: theme_1.theme.colors.white,
        fontWeight: 'bold',
        fontSize: 10
    }
});
exports.default = ConversationItem;
