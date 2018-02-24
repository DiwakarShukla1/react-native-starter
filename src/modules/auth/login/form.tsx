import * as React from 'react';
import { Field } from 'redux-form';
import { Clearfix, LoadingButton, InputField, Error } from '../../../common/components';
import { ValidationService, AuthService } from '../../../common/services';
import { WithForm } from '../../../common/HOC';
import { Form } from "native-base";

interface Props {
    handleSubmit?: (e: any) => {};
    pristine?: any;
    reset?: any;
    loading: boolean;
    invalid?: boolean;
    serverError?: string;
}

const LoginForm = (props: Props) => {
    const { handleSubmit, pristine, loading, invalid, serverError } = props;
    const submitDisabled = pristine || loading || invalid;

    return (
        <Form>
            <Field 
                validate={[ValidationService.required, ValidationService.email]}
                name="email" 
                component={InputField} 
                label="Email" />
            <Field
                validate={[ValidationService.required, ValidationService.minLength8]}
                name="password"
                type="password" 
                component={InputField} 
                label="Password"
            />
            <Clearfix/>
            <LoadingButton
                onPress={props.handleSubmit} 
                disabled={submitDisabled} 
                isLoading={loading}
                >
                Login
            </LoadingButton>
        </Form>
    );
};

export default WithForm(LoginForm, 'loginForm', AuthService.login);