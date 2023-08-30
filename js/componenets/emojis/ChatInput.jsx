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
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const MaterialCommunityIcons_1 = __importDefault(require("@expo/vector-icons/MaterialCommunityIcons"));
const EmojiPicker_1 = __importDefault(require("./emojis/EmojiPicker"));
const theme_1 = require("../../theme");
const ChatInput = ({ reply, closeReply, isLeft, username }) => {
    const [message, setMessage] = (0, react_1.useState)("");
    const [showEmojiPicker, setShowEmojiPicker] = (0, react_1.useState)(false);
    const height = (0, react_native_reanimated_1.useSharedValue)(70);
    (0, react_1.useEffect)(() => {
        if (showEmojiPicker) {
            height.value = (0, react_native_reanimated_1.withTiming)(400);
        }
        else {
            height.value = reply ? (0, react_native_reanimated_1.withSpring)(130) : (0, react_native_reanimated_1.withSpring)(70);
        }
    }, [showEmojiPicker]);
    (0, react_1.useEffect)(() => {
        if (reply) {
            height.value = showEmojiPicker ? (0, react_native_reanimated_1.withTiming)(450) : (0, react_native_reanimated_1.withTiming)(130);
        }
        else {
            height.value = showEmojiPicker ? (0, react_native_reanimated_1.withSpring)(400) : (0, react_native_reanimated_1.withSpring)(70);
        }
    }, [reply]);
    const heightAnimatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        return {
            height: height.value
        };
    });
    return (<react_native_reanimated_1.default.View style={[styles.container, heightAnimatedStyle]}>
			{reply ? (<react_native_1.View style={styles.replyContainer}>
					<react_native_1.TouchableOpacity onPress={closeReply} style={styles.closeReply}>
						<MaterialCommunityIcons_1.default name="close" color="#000" size={20}/>
					</react_native_1.TouchableOpacity>
					<react_native_1.Text style={styles.title}>
						Response to {isLeft ? username : "Me"}
					</react_native_1.Text>
					<react_native_1.Text style={styles.reply}>{reply}</react_native_1.Text>
				</react_native_1.View>) : null}
			<react_native_1.View style={styles.innerContainer}>
				<react_native_1.View style={styles.inputAndMicrophone}>
					<react_native_1.TouchableOpacity style={styles.emoticonButton} onPress={() => setShowEmojiPicker((value) => !value)}>
						<MaterialCommunityIcons_1.default name={showEmojiPicker ? "close" : "emoticon-outline"} size={23} color={theme_1.theme.colors.description}/>
					</react_native_1.TouchableOpacity>
					<react_native_1.TextInput multiline placeholder={"Type something..."} style={styles.input} value={message} onChangeText={(text) => setMessage(text)}/>
					<react_native_1.TouchableOpacity style={styles.rightIconButtonStyle}>
						<MaterialCommunityIcons_1.default name="paperclip" size={23} color={theme_1.theme.colors.description}/>
					</react_native_1.TouchableOpacity>
					<react_native_1.TouchableOpacity style={styles.rightIconButtonStyle}>
						<MaterialCommunityIcons_1.default name="camera" size={23} color={theme_1.theme.colors.description}/>
					</react_native_1.TouchableOpacity>
				</react_native_1.View>
				<react_native_1.TouchableOpacity style={styles.sendButton}>
					<MaterialCommunityIcons_1.default name={message ? "send" : "microphone"} size={23} color={theme_1.theme.colors.white}/>
				</react_native_1.TouchableOpacity>
			</react_native_1.View>
			<EmojiPicker_1.default />
		</react_native_reanimated_1.default.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        justifyContent: "center",
        backgroundColor: theme_1.theme.colors.white,
    },
    replyContainer: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    title: {
        marginTop: 5,
        fontWeight: "bold",
    },
    closeReply: {
        position: "absolute",
        right: 10,
        top: 5,
    },
    reply: {
        marginTop: 5,
    },
    innerContainer: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 10,
    },
    inputAndMicrophone: {
        flexDirection: "row",
        backgroundColor: theme_1.theme.colors.inputBackground,
        flex: 3,
        marginRight: 10,
        paddingVertical: react_native_1.Platform.OS === "ios" ? 10 : 0,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "space-between",
    },
    input: {
        backgroundColor: "transparent",
        paddingLeft: 20,
        color: theme_1.theme.colors.inputText,
        flex: 3,
        fontSize: 15,
        height: 50,
        alignSelf: "center",
    },
    rightIconButtonStyle: {
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 15,
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderLeftColor: "#fff",
    },
    swipeToCancelView: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 30,
    },
    swipeText: {
        color: theme_1.theme.colors.description,
        fontSize: 15,
    },
    emoticonButton: {
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
    },
    recordingActive: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 10,
    },
    recordingTime: {
        color: theme_1.theme.colors.description,
        fontSize: 20,
        marginLeft: 5,
    },
    microphoneAndLock: {
        alignItems: "center",
        justifyContent: "flex-end",
    },
    lockView: {
        backgroundColor: "#eee",
        width: 60,
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 130,
        paddingTop: 20,
    },
    sendButton: {
        backgroundColor: theme_1.theme.colors.primary,
        borderRadius: 50,
        height: 50,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
    },
});
exports.default = ChatInput;
