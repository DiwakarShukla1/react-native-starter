import React, { Component } from 'react';
import {Text} from 'native-base';
import {View, Keyboard} from 'react-native';
import {headers} from '../../../common/config';
import Form from './form';
import {NavigationActions} from 'react-navigation';
import * as SnackBar from "react-native-snackbar";
const Snackbar = SnackBar.default;

class ResetPassword extends Component {
    static navigationOptions = headers("Reset Password");
    render() {
        return (
            <Form
                onSuccess={this.handleResetPress.bind(this)} 
                onLoginPress={this.handleLoginPress.bind(this)}/>
        );
    }

    handleLoginPress() {
        Keyboard.dismiss();
        const navigate = NavigationActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'Login'})
            ]
        });
        this.props.navigation.dispatch(navigate)
    }

    handleResetPress(successMessage) {
        Keyboard.dismiss();
        Snackbar.show({title : successMessage, duration : Snackbar.LENGTH_INDEFINITE , action : { title : "DISMISS", color : "green" }});
        const navigate = NavigationActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'Login'})
            ]
        });
        this.props.navigation.dispatch(navigate)
    }
}

const FlexDemo= (props)=>{
    return(
        <View style={{flex:1,backgroundColor:'yellow'}}>
            <Text>Flex1</Text>
        </View>
    )
}

export default ResetPassword;