"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const FontAwesome_1 = __importDefault(require("@expo/vector-icons/FontAwesome"));
const theme_1 = require("../../theme");
const styles_1 = require("../../styles");
const AppTextInput = ({ icon, placeholder, ...otherProps }) => {
    return (<react_native_1.View style={styles_1.inputStyles.mainContainer}>
			<react_native_1.View style={styles.icon}>
				<FontAwesome_1.default name={icon} size={30} color={theme_1.theme.colors.primary}/>
			</react_native_1.View>
			<react_native_1.TextInput placeholder={placeholder} style={styles.input} {...otherProps}/>
		</react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    icon: {
        alignSelf: 'center',
        flex: 1,
        fontWeight: '500',
        color: theme_1.theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderLeftWidth: 4,
        borderLeftColor: theme_1.theme.colors.primary,
        flex: 2.8,
        backgroundColor: theme_1.theme.colors.white,
        color: theme_1.theme.colors.black,
        width: '100%',
        fontSize: 15,
        paddingLeft: 10
    }
});
exports.default = AppTextInput;
