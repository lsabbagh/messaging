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
const react_native_tab_view_1 = require("react-native-tab-view");
const categories_1 = __importDefault(require("../../../data/categories"));
const EmojiCategory_1 = __importDefault(require("./EmojiCategory"));
const TabBar_1 = __importDefault(require("./TabBar"));
const EmojiPicker = () => {
    const layout = (0, react_native_1.useWindowDimensions)();
    const [index, setIndex] = (0, react_1.useState)(0);
    const [routes, setRoutes] = (0, react_1.useState)(categories_1.default.tabs.map(tab => ({ key: tab.category, title: tab.tabLabel })));
    const renderScene = ({ route }) => (<EmojiCategory_1.default category={route.key}/>);
    return (<react_native_tab_view_1.TabView renderTabBar={props => <TabBar_1.default setIndex={setIndex} {...props}/>} navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} initialLayout={{ width: layout.width }}/>);
};
exports.default = (0, react_1.memo)(EmojiPicker);
