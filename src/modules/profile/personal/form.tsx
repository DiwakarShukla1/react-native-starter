import React from 'react';
import { Field } from 'redux-form';
import { Link, Clearfix, LoadingButton, InputField, Error } from '../../../common/components';
import { ValidationService, AuthService } from '../../../common/services';
import { WithForm } from '../../../common/HOC';
import { Form, Button, Text, Container, Content} from "native-base";
import { TouchableOpacity } from 'react-native';
import { Colors } from '../../../common/config';

const PersonalForm = (props) => {
    return(
        <Container>
            <Content>
                <Form>
                    
                </Form>
            </Content>
        </Container>
    );
};

export default PersonalForm;