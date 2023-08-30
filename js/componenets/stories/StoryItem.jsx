"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const native_1 = require("@react-navigation/native");
const theme_1 = require("../../theme");
const StoryItem = ({ username, picture, time, stories }) => {
    const navigation = (0, native_1.useNavigation)();
    return (<react_native_1.View style={styles.container}>
			<react_native_1.TouchableOpacity style={styles.button} onPress={() => { }}>
				<react_native_1.View style={styles.imageContainer}>
					<react_native_1.Image style={styles.image} source={{ uri: picture }}/>
				</react_native_1.View>
				<react_native_1.View style={styles.textsContainer}>
					<react_native_1.Text numberOfLine={1} style={styles.username}>{username}</react_native_1.Text>
					<react_native_1.Text numberOfLine={1} style={styles.time}>{time}</react_native_1.Text>
				</react_native_1.View>
			</react_native_1.TouchableOpacity>
		</react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: {},
    button: {
        flexDirection: 'row',
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 10
    },
    imageContainer: {
        marginRight: 15,
        borderRadius: 25,
        height: 50,
        width: 50,
        overflow: 'hidden',
        borderColor: theme_1.theme.colors.storyBorder,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center"
    },
    image: {
        height: 55,
        width: 55,
    },
    textsContainer: {
        justifyContent: 'center'
    },
    username: {
        color: theme_1.theme.colors.title,
        fontSize: theme_1.theme.fontSize.title
    },
    time: {
        color: theme_1.theme.colors.subTitle,
        fontSize: theme_1.theme.fontSize.description
    }
});
exports.default = StoryItem;
