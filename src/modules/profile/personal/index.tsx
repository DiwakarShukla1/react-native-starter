import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Field from 'redux-form';
import {WithForm} from '../../../common/HOC';
import {Container, Content, Form} from 'native-base';

class PersonalInfo extends Component {
    render() {
        return (
            <View>
                <Text>PersonalInfo</Text>
            </View>
        );
    }
}

export default PersonalInfo;