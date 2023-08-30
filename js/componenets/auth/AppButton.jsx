"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("../../theme");
const AppButton = ({ title, color, onPress }) => {
    return (<react_native_1.TouchableOpacity onPress={onPress} style={styles.container}>
			<react_native_1.Text style={[styles.title, { color: color }]}>{title}</react_native_1.Text>
		</react_native_1.TouchableOpacity>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: theme_1.theme.colors.white,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
});
exports.default = AppButton;
