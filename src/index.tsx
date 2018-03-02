import * as React from "react";
import { View, Text } from "react-native";
import { Provider } from 'react-redux';
import configureStore from './store';
import Root from "./nav";
import codePush from "react-native-code-push";

let codePushOptions = {
  updateDialog: codePush.DEFAULT_UPDATE_DIALOG,
  installMode: codePush.InstallMode.IMMEDIATE,
  checkFrequency : codePush.CheckFrequency.ON_APP_RESUME
};
@codePush(codePushOptions)
class App extends React.Component {
    render () {
        return  (
            <Provider store={configureStore()}>
                <Root/>  
            </Provider>
        );
    }
};

export default App;