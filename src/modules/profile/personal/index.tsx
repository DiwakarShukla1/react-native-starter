import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Field from 'redux-form';
import {WithForm} from '../../../common/HOC';
import Form from './form';
import {Container, Content, Form} from 'native-base';

class PersonalInfo extends Component {
    render() {
        return (
            <Form initialValues={{email:"patilrevansiddh@fmail.com"}} />
        );
    }
}

export default PersonalInfo;