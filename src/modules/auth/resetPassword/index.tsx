import React, { Component } from 'react';
import {Text} from 'native-base';
import {View} from 'react-native';
import {headers} from '../../../common/config';
import Form from './form';

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

    }

    handleResetPress() {

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