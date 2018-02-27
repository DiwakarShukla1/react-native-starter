import React, { Component } from 'react';
import Form from './form';
import {headers} from '../../../common/config';
import {NavigationActions} from 'react-navigation';

class ForgotPassword extends Component {
    static navigationOptions = headers("Forgot Password");

    render() {
        return (
            <Form 
                onLoginPress={this.handleLoginPress.bind(this)}
                onSuccess={this.handleSubmitEmail.bind(this)}/>
        );
    }

    handleLoginPress() {
        this.props.navigation.goBack();       
    }

    handleSubmitEmail() {
        const navigate = NavigationActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'ResetPassword'})
            ]
        });
        this.props.navigation.dispatch(navigate)
    }

}

export default ForgotPassword;