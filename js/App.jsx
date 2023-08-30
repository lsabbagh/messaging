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
const react_native_app_intro_slider_1 = __importDefault(require("react-native-app-intro-slider"));
const theme_1 = require("./Compose/theme");
const slides = [{
        id: 1,
        image: require('./assets/images/Hey.png')
    },
    {
        id: 2,
        image: require('./assets/images/2.png')
    },
    {
        id: 3,
        image: require('./assets/images/3.png')
    }
];
function App() {
    const [showHomePage, setShowHomePage] = (0, react_1.useState)(false);
    const buttonLabel = (labell) => {
        return (<react_native_1.View>
            <react_native_1.Text>
                {labell}
            </react_native_1.Text>
        </react_native_1.View>);
    };
    if (!showHomePage) {
        return (<react_native_app_intro_slider_1.default data={slides} renderItem={({ item }) => {
                return (<react_native_1.View style={{
                        flex: 1,
                        alignItems: 'center',
                    }}>
                <react_native_1.ImageBackground source={item.image} style={{
                        width: theme_1.SIZES.width,
                        height: theme_1.SIZES.height,
                    }}/>
            </react_native_1.View>);
            }} activeDotStyle={{
                backgroundColor: theme_1.COLORS.primary,
                width: 30,
            }} renderNextButton={() => buttonLabel("Next")} renderSkipButton={() => buttonLabel("Skip")} renderDoneButton={() => buttonLabel("Done")} onDone={() => {
                setShowHomePage(true);
            }}/>);
    }
    return (<react_native_1.View style={{
            flex: 1,
            justifyContent: 'center',
        }}>
    </react_native_1.View>);
}
exports.default = App;
