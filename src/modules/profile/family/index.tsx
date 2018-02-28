import React, { Component } from 'react';
import Form from './form';
import {DatePickerAndroid} from 'react-native';

interface Props {
    onSuccess:()=>{};
}
class FamilyInfo extends Component<Props> {

    render() {
        return (
            <Form
                onSuccess={this.handleAddFamilySuccess.bind(this)}
            />
        );
    }

    handleAddFamilySuccess(message) {

    }
}

export default FamilyInfo;