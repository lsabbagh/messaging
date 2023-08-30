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
const Message_1 = __importDefault(require("./Message"));
const theme_1 = require("../../theme");
const MessagesList = ({ onSwipeToReply }) => {
    const [messages, setMessages] = (0, react_1.useState)([
        {
            user: 0,
            time: "12:00",
            content: "Hey",
        },
        {
            user: 1,
            time: "12:05",
            content: "What's up",
        },
        {
            user: 1,
            time: "12:07",
            content: "How is it going?",
        },
        {
            user: 0,
            time: "12:09",
            content: "things are going great",
        },
        {
            user: 0,
            time: "12:00",
            content: "Good :)",
        },
        {
            user: 1,
            time: "12:05",
            content: "Should we hang out tomorrow? I was thinking of going somewhere which has drinks",
        },
        {
            user: 0,
            time: "12:07",
            content: "Sure",
        },
        {
            user: 1,
            time: "12:09",
            content: "Great",
        },
        {
            user: 0,
            time: "12:07",
            content: "7 o'clock?",
        },
        {
            user: 1,
            time: "12:09",
            content: "Sounds good",
        },
    ]);
    const user = (0, react_1.useRef)(0);
    const scrollView = (0, react_1.useRef)();
    return (<react_native_1.ScrollView style={{ backgroundColor: theme_1.theme.colors.white, flex: 1 }} ref={ref => scrollView.current = ref} onContentChange={() => {
            scrollView.current.scrollToEnd({ animated: true });
        }}> 
			{messages.map((message, index) => (<Message_1.default key={index} time={message.time} isLeft={message.user !== user.current} message={message.content} onSwipe={onSwipeToReply}/>))}
		</react_native_1.ScrollView>);
};
exports.default = MessagesList;
