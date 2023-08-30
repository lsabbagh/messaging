"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const stack_1 = require("@react-navigation/stack");
const MessagingScreen_1 = __importDefault(require("../Screens/MessagingScreen"));
const Stack = (0, stack_1.createStackNavigator)();
const RootNavigator = () => {
    return (<Stack.Navigator initialRouteName={{ headerShown: false }}>
            <Stack.Screen name="MessagingScreen" component={MessagingScreen_1.default}/>          </Stack.Navigator>);
};
exports.default = RootNavigator;
