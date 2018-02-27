import React from 'react';
import {Form, Container, Content, Button, Text} from 'native-base';
import {Field} from 'redux-form';
import {WithForm} from '../.././../common/HOC';
import {View} from 'react-native';
import {ValidationService, AuthService} from '../../../common/services';
import {InputField, Clearfix, LoadingButton} from '../../../common/components';
import {labels} from '../../../common/constants';

const ResetForm = (props)=>{
    const { handleSubmit, pristine, loading, invalid, serverError } = props;
    const submitDisabled = pristine || loading || invalid;
    return(
        <Container>
            <Content>
                <Form>
                    <Field 
                        validate={[ValidationService.required]}
                        name="otp"
                        autoFocus={true} 
                        component={InputField} 
                        keyboardType="numeric"
                        label="OTP"/>
                    <Field 
                        validate={[ValidationService.required, ValidationService.minLength8]}
                        name="password"
                        component={InputField} 
                        secureTextEntry={true}
                        label="New Password"/>
                    <Field 
                        validate={[ValidationService.required,  ValidationService.minLength8, ValidationService.comparePasswords]}
                        name="confirm"
                        component={InputField} 
                        secureTextEntry={true}
                        label="Confirm Password"/>
                </Form>
                <LoadingButton
                        onPress={props.handleSubmit} 
                        disabled={submitDisabled} 
                        isLoading={loading}
                        >
                        {labels.btnLabel.ResetPassword}
                </LoadingButton>
                <Clearfix/>
                <Button onPress={()=>props.onLoginPress()} bordered block style={{marginHorizontal: 16}}>
                        <Text>{labels.btnLabel.BackToLogin}</Text> 
                </Button>
            </Content>
        </Container>
    )
}

export default WithForm(ResetForm,'resetForm',AuthService.resetPassword);