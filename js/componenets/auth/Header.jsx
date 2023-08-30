"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("../../theme");
const BigIcon_1 = __importDefault(require("./BigIcon"));
const Header = ({ icon, title }) => {
    return (<react_native_1.View style={styles.container}>
			<BigIcon_1.default icon={icon} size={150} color={theme_1.theme.colors.white}/>
			<react_native_1.Text style={styles.title}>{title}</react_native_1.Text>
		</react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        paddingVertical: 50,
        backgroundColor: theme_1.theme.colors.primary,
        alignContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: theme_1.theme.colors.white,
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});
exports.default = Header;
