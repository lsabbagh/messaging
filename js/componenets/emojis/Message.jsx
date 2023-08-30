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
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const theme_1 = require("../../theme");
const Message = ({ time, isLeft, message, onSwipe }) => {
    const startingPosition = 0;
    const x = (0, react_native_reanimated_1.useSharedValue)(startingPosition);
    const isOnLeft = (type) => {
        if (isLeft && type === "messageContainer") {
            return {
                alignSelf: "flex-start",
                backgroundColor: "#f0f0f0",
                borderTopLeftRadius: 0,
            };
        }
        else if (isLeft && type === "message") {
            return {
                color: "#000",
            };
        }
        else if (isLeft && type === "time") {
            return {
                color: "darkgray",
            };
        }
        else {
            return {
                borderTopRightRadius: 0,
            };
        }
    };
    const eventHandler = (0, react_native_reanimated_1.useAnimatedGestureHandler)({
        onStart: (event, ctx) => {
        },
        onActive: (event, ctx) => {
            x.value = isLeft ? 50 : -50;
        },
        onEnd: (event, ctx) => {
            x.value = (0, react_native_reanimated_1.withSpring)(startingPosition);
        }
    });
    const uas = (0, react_native_reanimated_1.useAnimatedStyle)(() => {
        return {
            transform: [{ translateX: x.value }]
        };
    });
    return (<react_native_gesture_handler_1.FlingGestureHandler direction={isLeft ? react_native_gesture_handler_1.Directions.RIGHT : react_native_gesture_handler_1.Directions.LEFT} onGestureEvent={eventHandler} onHandlerStateChange={({ nativeEvent }) => {
            if (nativeEvent.state === react_native_gesture_handler_1.State.ACTIVE) {
                onSwipe(message, isLeft);
            }
        }}>
			<react_native_reanimated_1.default.View style={[styles.container, uas]}>
				<react_native_1.View style={[
            styles.messageContainer,
            isOnLeft("messageContainer"),
        ]}>
					<react_native_1.View style={styles.messageView}>
						<react_native_1.Text style={[styles.message, isOnLeft("message")]}>
							{message}
						</react_native_1.Text>
					</react_native_1.View>
					<react_native_1.View style={styles.timeView}>
						<react_native_1.Text style={[styles.time, isOnLeft("time")]}>
							{time}
						</react_native_1.Text>
					</react_native_1.View>
				</react_native_1.View>
			</react_native_reanimated_1.default.View>
		</react_native_gesture_handler_1.FlingGestureHandler>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        paddingVertical: 10,
        marginVertical: 5,
    },
    messageContainer: {
        backgroundColor: theme_1.theme.colors.messageBackground,
        maxWidth: "80%",
        alignSelf: "flex-end",
        flexDirection: "row",
        borderRadius: 15,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 10,
    },
    messageView: {
        backgroundColor: "transparent",
        maxWidth: "80%",
    },
    timeView: {
        backgroundColor: "transparent",
        justifyContent: "flex-end",
        paddingLeft: 10,
    },
    message: {
        color: "white",
        alignSelf: "flex-start",
        fontSize: 15,
    },
    time: {
        color: "lightgray",
        alignSelf: "flex-end",
        fontSize: 10,
    },
});
exports.default = Message;
