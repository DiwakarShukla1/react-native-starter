import React from 'react';
import { Field } from 'redux-form';
import { Link, Clearfix, LoadingButton, InputField, Error, PickerField} from '../../../common/components';
import { ValidationService, ProfileService } from '../../../common/services';
import { WithForm } from '../../../common/HOC';
import {labels} from '../../../common/constants';
import { Form, Button, Text, Container, Content, View} from "native-base";



const FamilyForm = (props) => {
    const { handleSubmit, pristine, loading, invalid, serverError } = props;
    const submitDisabled = pristine || loading || invalid;

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
                        validate={[ValidationService.required]}
                        name="relationWithYou"
                        editable={true} 
                        component={InputField} 
                        label="Relation With You" />
                    <Field 
                        validate={[ValidationService.required]}
                        name="dateOfBirth"
                        component={InputField} 
                        label="Date Of Birth"/>
                    {/* // "isStudent" : true, */}
                    <Field 
                        validate={[ValidationService.required]}
                        name="nameOfSchool"
                        component={InputField} 
                        label="Name Of School" />
                    <Field 
                        validate={[ValidationService.required]}
                        name="gradeOfSchool"
                        component={InputField} 
                        label="Grade Of School" />
                    <Clearfix/>
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

export default WithForm(FamilyForm,"familyForm", ProfileService.updateProfile);