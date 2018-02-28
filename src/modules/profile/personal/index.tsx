import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Field from 'redux-form';
import {WithForm} from '../../../common/HOC';
import Form from './form';
import {connect} from 'react-redux';

class PersonalInfo extends Component {
    render() {
        return (
            <Form
                formData={this.props.formData} 
                initialValues={{email:"patilrevansiddh@gmail.com"}} />
        );
    }
}

const mapStateToProps = (state)=>({
    formData : state.form.personalForm
});

export default connect(mapStateToProps)(PersonalInfo);