"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const FontAwesome_1 = __importDefault(require("@expo/vector-icons/FontAwesome"));
const theme_1 = require("../../theme");
const SearchInput = () => {
    return (<react_native_1.View style={styles.container}>
			<react_native_1.View style={styles.row}>
				<FontAwesome_1.default name="search" size={20} color={theme_1.theme.colors.searchIcon}/>
				<react_native_1.TextInput style={styles.input} placeholder="Search" maxLength={10}/>
			</react_native_1.View>
		</react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    row: {
        backgroundColor: theme_1.theme.colors.searchBackground,
        flexDirection: 'row',
        borderRadius: 5,
        height: 45,
        alignItems: 'center',
        paddingHorizontal: 10
    },
    input: {
        paddingHorizontal: 30,
        fontSize: 15,
        height: 45,
        flex: 1,
        color: theme_1.theme.colors.searchText
    }
});
exports.default = SearchInput;
