/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import { AppRegistry } from 'react-native';
import codePush from "react-native-code-push";
import {name as appName} from './app.json';
import App from './App';

let codePushOptions = { 
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    installMode: codePush.InstallMode.ON_NEXT_RESUME
};

AppRegistry.registerComponent(appName, () => codePush(codePushOptions)(App));