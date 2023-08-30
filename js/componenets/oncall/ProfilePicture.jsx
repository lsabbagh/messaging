"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const ProfilePicture = ({ picture }) => {
    return (<react_native_1.View>
			<react_native_1.Image style={styles.image} source={{ uri: picture }}/>
		</react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    image: {
        height: 200,
        width: 200,
        borderRadius: 100
    }
});
exports.default = ProfilePicture;
