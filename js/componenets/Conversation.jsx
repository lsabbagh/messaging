"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ConversationItem_1 = __importDefault(require("./ConversationItem"));
const Conversations = ({ children }) => {
    return (<react_native_1.ScrollView>
			{children}
			<ConversationItem_1.default picture="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" username="Murphy Patrick" bio="my name is Mercy Patrick" lastMessage="Hello there" time="4:00 PM" notification="3" isBlocked isMuted hasStory/>
			<ConversationItem_1.default picture="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" username="Mark James" bio="my name is Mercy Patrick" lastMessage="Hello there" time="4:00 PM" notification="1" isBlocked isMuted hasStory/>
			<ConversationItem_1.default picture="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" username="Nina Gomez" bio="my name is Mercy Patrick" lastMessage="Hello there" time="4:00 PM" isBlocked isMuted/>
			<ConversationItem_1.default picture="https://images.pexels.com/photos/5486199/pexels-photo-5486199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" username="Jack Randolph" bio="my name is Mercy Patrick" lastMessage="Hello there" time="4:00 PM" isBlocked isMuted/>
			<ConversationItem_1.default picture="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" username="Stephany Garcia" bio="my name is Mercy Patrick" lastMessage="Hello there" time="4:00 PM" notification="5" isBlocked isMuted hasStory/>

		</react_native_1.ScrollView>);
};
exports.default = Conversations;
