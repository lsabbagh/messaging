"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const FontAwesome_1 = __importDefault(require("@expo/vector-icons/FontAwesome"));
const theme_1 = require("../../theme");
const ProfileInfo = ({ username, bio, picture, isBlocked, isMuted, hide }) => {
    return (<react_native_1.TouchableOpacity style={styles.modalContainer} onPress={hide} activeOpacity={1}>
			<react_native_1.View style={styles.modalInnerContainer}>
				<react_native_1.TouchableOpacity activeOpacity={1}>
					<react_native_1.Image style={styles.image} source={{ uri: picture }}/>
					<react_native_1.View style={styles.usernameContainer}>
						<react_native_1.Text style={styles.username}>{username}</react_native_1.Text>
					</react_native_1.View>
					<react_native_1.View style={styles.modalOptionsContainer}>
						<react_native_1.TouchableOpacity style={styles.modalIconContainer}>
							<FontAwesome_1.default name="align-left" size={25} color={theme_1.theme.colors.primary}/>
						</react_native_1.TouchableOpacity>
						<react_native_1.TouchableOpacity style={styles.modalIconContainer}>
							<FontAwesome_1.default name="phone" size={25} color={theme_1.theme.colors.primary}/>
						</react_native_1.TouchableOpacity>
						<react_native_1.TouchableOpacity style={styles.modalIconContainer}>
							<FontAwesome_1.default name="info-circle" size={25} color={theme_1.theme.colors.primary}/>
						</react_native_1.TouchableOpacity>
					</react_native_1.View>
				</react_native_1.TouchableOpacity>
			</react_native_1.View>
		</react_native_1.TouchableOpacity>);
};
const styles = react_native_1.StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 10
    },
    modalInnerContainer: {
        backgroundColor: theme_1.theme.colors.white,
        borderRadius: 20,
        elevation: 3,
        overflow: 'hidden'
    },
    image: {
        width: 200,
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    usernameContainer: {
        position: 'absolute',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#5557',
        width: '100%',
        alignItems: 'center'
    },
    username: {
        color: theme_1.theme.colors.white,
        backgroundColor: 'transparent'
    },
    modalOptionsContainer: {
        backgroundColor: theme_1.theme.colors.white,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    modalIconContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10
    }
});
exports.default = ProfileInfo;
