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
const ChatHeader_1 = __importDefault(require("../components/messages/ChatHeader"));
const ChatInput_1 = __importDefault(require("../components/messages/ChatInput"));
const MessagesList_1 = __importDefault(require("../components/messages/MessagesList"));
const MessagesScreen = ({ navigation, route }) => {
    const { username, bio, picture, isBlocked, isMuted } = route.params;
    const [reply, setReply] = (0, react_1.useState)("");
    const [isLeft, setIsLeft] = (0, react_1.useState)();
    const swipeToReply = (message, isLeft) => {
        setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
        setIsLeft(isLeft);
    };
    const closeReply = () => {
        setReply("");
    };
    return (<react_native_1.View style={{ flex: 1 }}>
			<ChatHeader_1.default onPress={() => { }} username={username} picture={picture} onlineStatus={'Online'}/>
			<MessagesList_1.default onSwipeToReply={swipeToReply}/>
			<ChatInput_1.default reply={reply} isLeft={isLeft} closeReply={closeReply} username={username}/>
		</react_native_1.View>);
};
exports.default = MessagesScreen;
