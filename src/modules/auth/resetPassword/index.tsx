import React, { Component } from 'react';
import {Text} from 'native-base';
import {View} from 'react-native';
import {headers} from '../../../common/config';

class ResetPassword extends Component {
    static navigationOptions = headers("Reset Password");
    render() {
        return (
            <View>
                <Text>Reset Password</Text>
            </View>
        );
    }
}

export default ResetPassword;