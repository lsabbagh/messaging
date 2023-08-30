"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const FontAwesome_1 = __importDefault(require("@expo/vector-icons/FontAwesome"));
const OptionButtons = ({ name, size, color, onPress }) => {
    return (<react_native_1.View>
			<react_native_1.TouchableOpacity onPress={onPress} style={[styles.iconContainer, {
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: color
            }]}>
				<FontAwesome_1.default size={size - 30} name={name} color={"white"}/>
			</react_native_1.TouchableOpacity>
		</react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    iconContainer: {
        backgroundColor: "red",
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
exports.default = OptionButtons;
