/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';


if(process.env.NODE_ENV === 'production') disableReactDevTools()
AppRegistry.registerComponent(appName, () => App);
