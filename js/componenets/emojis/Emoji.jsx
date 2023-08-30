"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const shortnameToUnicode_1 = require("../data/helpers/shortnameToUnicode")
const Emoji = ({ item }) => {
    return (<react_native_1.TouchableOpacity style={styles.emojiContainer}>
			<react_native_1.Text style={styles.emoji}>{shortnameToUnicode_1.default[`:${item}:`]}</react_native_1.Text>
		</react_native_1.TouchableOpacity>);
};
const styles = react_native_1.StyleSheet.create({
    emojiContainer: {
        marginHorizontal: 9
    },
    emoji: {
        fontSize: 25
    }
});
exports.default = Emoji;
