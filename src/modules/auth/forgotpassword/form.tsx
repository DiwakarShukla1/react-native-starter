import React from 'react';
import {View} from 'react-native';
import {Container, Content, Form, Button, Text} from 'native-base';
import {WithForm} from '../../../common/HOC';
import {Field} from 'redux-form';
import {InputField, ClearFix, LoadingButton} from '../../../common/components';
import {AuthService, ValidationService} from '../../../common/services';
import {labels} from '../../../common/constants';

const ForgotForm = (props) => {
   const {loading} = props
   return( 
        <Container>
             <Content>
                <Form>
                    <Field 
                        validate={[ValidationService.required, ValidationService.email]}
                        name="email"                        
                        autoFocus={true} 
                        onBlur={props.onEmailBlur}
                        component={InputField} 
                        keyboardType="email-address"
                        label="Email" />
                    <ClearFix/> 
                    <LoadingButton
                        onPress={() => props.handleSubmit(props.invalid)} 
                        disabled={false} 
                        isLoading={loading}
                        >
                        {labels.btnLabel.Submit}
                    </LoadingButton>
                    <ClearFix/>
                    <Button onPress={()=>props.onLoginPress()} bordered block style={{marginHorizontal: 16}}>
                        <Text>{labels.btnLabel.BackToLogin}</Text> 
                    </Button>
                </Form>
             </Content>
         </Container>
    )
}
export default WithForm(ForgotForm, 'forgotForm', AuthService.forgotPassword);