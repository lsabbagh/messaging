"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const FontAwesome5_1 = __importDefault(require("@expo/vector-icons/FontAwesome5"));
const theme_1 = require("../../theme");
const AddStoryCard = () => {
    return (<react_native_1.View style={styles.mainContainer}>
			<react_native_1.TouchableOpacity style={styles.innerContainer}>
				<react_native_1.View style={styles.imageContainer}>
					<react_native_1.Image style={styles.image} source={{
            uri: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}/>
					<react_native_1.View style={styles.iconContainer}>
						<FontAwesome5_1.default name="plus" size={15} color="white" style={styles.iconStyle}/>
					</react_native_1.View>
				</react_native_1.View>
				<react_native_1.View style={styles.textContainer}>
					<react_native_1.Text style={styles.text}>Add a Story</react_native_1.Text>
				</react_native_1.View>
			</react_native_1.TouchableOpacity>
		</react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    mainContainer: {
        paddingBottom: 10
    },
    innerContainer: {
        paddingRight: 20,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    imageContainer: {
        marginRight: 15,
        overflow: 'hidden',
        paddingVertical: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    iconContainer: {
        position: 'absolute',
        backgroundColor: theme_1.theme.colors.primary,
        borderRadius: 12.5,
        height: 25,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        top: 45
    },
    textContainer: {
        justifyContent: 'center'
    },
    text: {
        color: theme_1.theme.colors.primary,
        fontSize: theme_1.theme.fontSize.title,
        fontWeight: 'normal'
    }
});
exports.default = AddStoryCard;
