import * as React from 'react';
import { Field } from 'redux-form';
import { Link, ClearFix, LoadingButton, InputField, Error } from '../../../common/components';
import { ValidationService, AuthService } from '../../../common/services';
import { WithForm } from '../../../common/HOC';
import { Form, Button, Text } from "native-base";
import { TouchableOpacity } from 'react-native';
import { Colors } from '../../../common/config';

interface Props {
    handleSubmit?: (e: any) => {};
    pristine?: any;
    reset?: any;
    loading: boolean;
    invalid?: boolean;
    serverError?: string;
    onForgotPassword: ()=> void;
    onRegister: ()=> void;
}

const LoginForm = (props: Props) => {
    const { handleSubmit, pristine, loading, invalid, serverError } = props;
    const submitDisabled = pristine || loading || invalid;

    return (
        <Form>
            <Field 
                validate={[ValidationService.required, ValidationService.email]}
                name="email"
                autoFocus={true} 
                component={InputField} 
                keyboardType="email-address"
                label="Email" />
            <Field
                validate={[ValidationService.required, ValidationService.minLength8]}
                name="password"
                type="password"
                secureTextEntry={true}
                component={InputField} 
                label="Password"
            />
            <ClearFix/>
            <Link onPress={props.onForgotPassword}> Forgot Password ? </Link>
            <ClearFix/> 
            <LoadingButton
                onPress={props.handleSubmit} 
                disabled={submitDisabled} 
                isLoading={loading}
                >
                Login
            </LoadingButton>
            <ClearFix/>
            <Button onPress={props.onRegister} bordered block style={{marginHorizontal: 16}}>
                <Text>Register</Text> 
            </Button>
        </Form>
    );
};

export default WithForm(LoginForm, 'loginForm', AuthService.login);