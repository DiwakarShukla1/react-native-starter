import React from 'react';
import { Field } from 'redux-form';
import { Link, Clearfix, LoadingButton, InputField, Error } from '../../../common/components';
import { ValidationService, AuthService } from '../../../common/services';
import { WithForm } from '../../../common/HOC';
import {labels} from '../../../common/constants';
import { Form, Button, Text, Container, Content, View} from "native-base";


const pickerItems = [{label:"Rented",value:"rented"},{label:"Owner",value:"owner"}];

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
                        validate={[ValidationService.required]}
                        name="contactNumber"
                        component={InputField} 
                        label="Contact Number"/>
                    <Field 
                        validate={[ValidationService.required]}
                        name="address"
                        component={InputField} 
                        label="Address" />
                    <Field 
                        validate={[ValidationService.required]}
                        name="buildingName"
                        component={InputField} 
                        label="Building Name" />
                    <Field 
                        validate={[ValidationService.required]}
                        name="buildingSize"
                        component={InputField} 
                        label="Building Size" />
                    <Field 
                        validate={[ValidationService.required]}
                        name="yearOfBuildingConstruction"
                        component={InputField} 
                        label="Year of Building Construction" />
                    <Field 
                        validate={[ValidationService.required]}
                        name="stateOfResidence"
                        component={InputField} 
                        label="State Of Residence" />

                    {/* <Field
                        pickerItems={pickerItems}
                        name="State of Residence"
                        /> */}
                    <Field 
                        validate={[ValidationService.required]}
                        name="nameOfOwner"
                        component={InputField} 
                        label="Name of Owner" />
                    <Field 
                        validate={[ValidationService.required]}
                        name="contactNumberOfOwner"
                        component={InputField} 
                        label="Contact Number of Owner" />
                    <Field 
                        validate={[ValidationService.required]}
                        name="emailOfOwner"
                        component={InputField} 
                        label="Email Of Owner" />
                    <Clearfix/>            
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
const Fields = (props)=>{
    const fields = props.fields.map((m)=>{
        return  <Field 
                    validate={[ValidationService.required]}
                    name={m.name}
                    component={InputField} 
                    label={m.label} />
    })   
    return fields
}
export default WithForm(PersonalForm,"personalForm",AuthService.forgotPassword);