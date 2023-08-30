"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const theme_1 = require("../../theme");
const Header = ({ title }) => {
    return (<react_native_1.View style={styles.container}>
			<react_native_1.View style={styles.headerContainer}>
				<react_native_1.Text style={styles.headerTitle}>{title}</react_native_1.Text>
				<react_native_1.TouchableOpacity onPress={() => { }} style={styles.imageContainer}>
					<react_native_1.Image style={styles.image} source={{
            uri: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }}/>
				</react_native_1.TouchableOpacity>
			</react_native_1.View>
		</react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: theme_1.theme.colors.primary,
        paddingTop: 30,
        paddingBottom: 10
    },
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        position: 'relative',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginVertical: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: theme_1.theme.colors.white,
        alignSelf: 'center'
    },
    imageContainer: {
        borderRadius: 20,
        height: 40,
        width: 40,
        overflow: 'hidden',
    },
    image: {
        height: 40,
        width: 40
    }
});
exports.default = Header;
