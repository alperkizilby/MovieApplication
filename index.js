/**
 * @format
 */

import {AppRegistry} from 'react-native';//react native app
import App from './App';// aktarım yapılır
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
