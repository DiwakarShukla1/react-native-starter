import * as React from "react";
import { View, Text } from "react-native";
import { Provider } from 'react-redux';
import configureStore from './store';
import Root from "./nav";

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