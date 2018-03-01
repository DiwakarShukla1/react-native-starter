import React from 'react';
import { Field } from 'redux-form';
import { 
    Link, Clearfix, LoadingButton, 
    InputField, Error, PickerField, ImageUploader
} from '../../../common/components';
import { ValidationService, ProfileService } from '../../../common/services';
import { WithForm } from '../../../common/HOC';
import {labels} from '../../../common/constants';
import { Form, Button, Text, Container, Content, View} from "native-base";


const pickerItems = [{label:"Rented",value:"Rented"},{label:"Owned",value:"Owned"}];

const PersonalForm = (props) => {
    const { handleSubmit, pristine, loading, invalid, serverError } = props;
    const submitDisabled = pristine || loading || invalid;
    const values = props.data && props.data.values;

    return(
        <Container>
            <Content>
                <Form>
                    <Field 
                        validate={[ValidationService.required]}
                        name="firstName"
                        autoFocus={true} 
                        component={InputField} 
                        label="First Name" />
                    <Field
                        validate={[ValidationService.required]}
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
                        pickerItems={pickerItems}   
                        name="stateOfResidence"
                        label="State of Residence"
                        component={PickerField}
                        />
                    {values && values.stateOfResidence === "Rented" && 
                        <Field 
                        validate={[ValidationService.required]}
                        name="nameOfOwner"
                        component={InputField} 
                        label="Name of Owner" />
                    }
                    { values && values.stateOfResidence === "Rented" && <Field 
                        validate={[ValidationService.required]}
                        name="contactNumberOfOwner"
                        component={InputField} 
                        label="Contact Number of Owner" />
                    }
                    { values && values.stateOfResidence === "Rented" && <Field 
                        validate={[ValidationService.required]}
                        name="emailOfOwner"
                        component={InputField} 
                        label="Email Of Owner" />
                    }
                    <Field 
                        validate={[ValidationService.url]}
                        name="uploadPic"
                        component={ImageUploader} 
                        label="Select Profile" />
                    <Field 
                        validate={[ValidationService.url]}
                        name="facebook"
                        component={InputField} 
                        label="Facebook Link" />
                    <Field 
                        validate={[ValidationService.url]}
                        name="twitter"
                        component={InputField} 
                        label="Twitter Link" />
                    <Field 
                        validate={[ValidationService.url]}
                        name="google"
                        component={InputField} 
                        label="Google Link" />
                    <LoadingButton
                        onPress={props.handleSubmit} 
                        disabled={submitDisabled} 
                        isLoading={loading}
                        >
                        {labels.btnLabel.Save}
                    </LoadingButton>
                    <Clearfix/>
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
export default WithForm(PersonalForm,"personalForm", ProfileService.updateProfile);