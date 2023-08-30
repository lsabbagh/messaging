"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const CallItem_1 = __importDefault(require("./CallItem"));
const Calls = () => {
    return (<react_native_1.ScrollView>
			<CallItem_1.default picture="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" username="Mercy Patrick" callStatus={0} time="12:00 PM Today"/>
			<CallItem_1.default picture="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" username="Jackie Chan" callStatus={1} time="12:00 PM Today"/>
			<CallItem_1.default picture="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" username="Jet Li" callStatus={2} time="12:00 PM Today"/>
			<CallItem_1.default picture="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" username="James Johnson" callStatus={3} time="12:00 PM Today"/>
		</react_native_1.ScrollView>);
};
exports.default = Calls;
