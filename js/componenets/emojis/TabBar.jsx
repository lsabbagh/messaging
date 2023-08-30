"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const TabBar = ({ navigationState, position, setIndex }) => {
    const inputRange = navigationState.routes.map((x, i) => i);
    return (<react_native_1.View style={styles.container}>
			{navigationState.routes.map((route, index) => {
            const opacity = position.interpolate({
                inputRange,
                outputRange: inputRange.map((inputIndex) => inputIndex === index ? 1 : 0.5),
            });
            return (<react_native_1.TouchableOpacity key={index} style={styles.tab} onPress={() => setIndex(index)}>
						<react_native_1.Animated.Text style={{ opacity, fontSize: 18 }}>
							{route.title}
						</react_native_1.Animated.Text>
					</react_native_1.TouchableOpacity>);
        })}
		</react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#ccc'
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5
    }
});
exports.default = TabBar;
