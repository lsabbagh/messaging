"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const StoryItem_1 = __importDefault(require("./StoryItem"));
const AddStoryCard_1 = __importDefault(require("./AddStoryCard"));
const Stories = () => {
    return (<react_native_1.ScrollView>
			<AddStoryCard_1.default />
			<StoryItem_1.default picture="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" username="Jake Bull" time="3 Hours ago" stories={[
            {
                time: "3 Hours ago",
                url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
                time: "3 Hours ago",
                url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
                time: "3 Hours ago",
                url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
        ]}/>
			<StoryItem_1.default picture="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" username="Ryan Murphy" time="3 Hours ago" stories={[
            {
                time: "3 Hours ago",
                url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
                time: "3 Hours ago",
                url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
                time: "3 Hours ago",
                url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
        ]}/>
			<StoryItem_1.default picture="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" username="Nina Gomez" time="3 Hours ago" stories={[
            {
                time: "3 Hours ago",
                url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
                time: "3 Hours ago",
                url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
            {
                time: "3 Hours ago",
                url: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            },
        ]}/>
		</react_native_1.ScrollView>);
};
exports.default = Stories;
