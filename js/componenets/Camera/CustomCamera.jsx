"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const MaterialCommunityIcons_1 = __importDefault(require("@expo/vector-icons/MaterialCommunityIcons"));
const MediaLibrary = __importStar(require("expo-media-library"));
const expo_camera_1 = require("expo-camera");
const theme_1 = require("../../theme");
const CustomCamera = () => {
    const [medias, setMedias] = (0, react_1.useState)([]);
    const [hasPermission, setHasPermission] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        (async () => {
            if (await requireCameraPermissions()) {
                setHasPermission(true);
            }
            if (await requireCameraRollPermissions()) {
                const files = await MediaLibrary.getAssetsAsync({
                    first: 25,
                    mediaType: ["photo", "video"],
                    sortBy: ["creationTime"]
                });
                setMedias(files.assets);
            }
        })();
    }, []);
    const requireCameraRollPermissions = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync(false);
        return status === "granted";
    };
    const requireCameraPermissions = async () => {
        const { status } = await expo_camera_1.Camera.requestPermissionsAsync();
        return status === "granted";
    };
    if (!hasPermission) {
        return <react_native_1.View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
			<react_native_1.Text style={{ color: '#fff' }}>No access to Camera</react_native_1.Text>
		</react_native_1.View>;
    }
    return (<react_native_1.View style={styles.container}>
			<expo_camera_1.Camera style={styles.camera}/>
			<react_native_1.View style={styles.footer}>
				<react_native_1.View style={styles.medias}>
					<react_native_1.FlatList data={medias} renderItem={({ item }) => <react_native_1.Image style={styles.media} source={{ uri: item.uri }} resizeMode="cover"/>} keyExtractor={item => item.id} horizontal/>
				</react_native_1.View>
				<react_native_1.View style={styles.buttons}>
					<react_native_1.TouchableOpacity>
						<MaterialCommunityIcons_1.default name="flash" color={theme_1.theme.colors.white} size={30}/>
					</react_native_1.TouchableOpacity>
					<react_native_1.TouchableOpacity>
						<MaterialCommunityIcons_1.default name="camera-iris" color={theme_1.theme.colors.white} size={100}/>
					</react_native_1.TouchableOpacity>
					<react_native_1.TouchableOpacity>
						<MaterialCommunityIcons_1.default name="camera-party-mode" color={theme_1.theme.colors.white} size={30}/>
					</react_native_1.TouchableOpacity>
				</react_native_1.View>
			</react_native_1.View>
		</react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    camera: {
        flex: 1
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    medias: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 10
    },
    media: {
        width: 80,
        height: 80,
        marginHorizontal: 2
    },
    buttons: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20
    }
});
exports.default = CustomCamera;
