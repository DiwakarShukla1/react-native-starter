import React from 'react';
import { Field } from 'redux-form';
import { Link, Clearfix, LoadingButton, InputField, Error } from '../../../common/components';
import { ValidationService, AuthService } from '../../../common/services';
import { WithForm } from '../../../common/HOC';
import {labels} from '../../../common/constants';
import { Form, Button, Text, Container, Content, View} from "native-base";

const PersonalForm = (props) => {
    const { handleSubmit, pristine, loading, invalid, serverError } = props;
    const submitDisabled = pristine || loading || invalid;

    return(
        <Container>
            <Content>
                <Form>
                    <Field 
                        validate={[ValidationService.required, ValidationService.email]}
                        name="firstName"
                        autoFocus={true} 
                        component={InputField} 
                        label="First Name" />
                    <Field 
                        validate={[ValidationService.required, ValidationService.email]}
                        name="lastName"
                        component={InputField} 
                        label="Last Name" />
                    <Field 
                        validate={[ValidationService.required, ValidationService.email]}
                        name="email"
                        editable={true} 
                        component={InputField} 
                        label="Email" />
                    <Field 
                        validate={[ValidationService.required, ValidationService.email]}
                        name="contactNumber"
                        component={InputField} 
                        label="Contact Number"/>
                    <Field 
                        validate={[ValidationService.required, ValidationService.email]}
                        name="address"
                        component={InputField} 
                        label="Address" />
                    <Field 
                        validate={[ValidationService.required, ValidationService.email]}
                        name="buildingName"
                        component={InputField} 
                        label="Building Name" />
                    <Field 
                        validate={[ValidationService.required, ValidationService.email]}
                        name="buildingSize"
                        component={InputField} 
                        label="Building Size" />
                    <Field 
                        validate={[ValidationService.required, ValidationService.email]}
                        name="yearOfBuildingConstruction"
                        component={InputField} 
                        label="First Name" />
                    <Field 
                        validate={[ValidationService.required, ValidationService.email]}
                        name="stateOfResidence"
                        component={InputField} 
                        label="State Of Residence" />

                    {/* dropDown/ */}
                    <Field 
                        validate={[ValidationService.required, ValidationService.email]}
                        name="nameOfOwner"
                        component={InputField} 
                        label="Name of Owner" />
                     <Field 
                        validate={[ValidationService.required, ValidationService.email]}
                        name="contactNumberOfOwner"
                        component={InputField} 
                        label="Contact Number of Owner" />
                    <Field 
                        validate={[ValidationService.required, ValidationService.email]}
                        name="emailOfOwner"
                        component={InputField} 
                        label="Email Of Owner" />
                    <LoadingButton
                        onPress={props.handleSubmit} 
                        disabled={submitDisabled} 
                        isLoading={loading}
                        >
                        {labels.btnLabel.Save}
                    </LoadingButton>
                </Form>
            </Content>
        </Container>
    );
};

export default WithForm(PersonalForm,"personalForm",AuthService.forgotPassword);