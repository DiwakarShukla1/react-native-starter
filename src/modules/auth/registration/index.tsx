import * as React from 'react';
import { headers } from "../../../common/config";
import { ClearFix, LoadingButton } from "../../../common/components";
import { Container, Content, Button, Text } from "native-base";
import RegistrationForm from "./form";
import RegistrationSuccess from "./success";

interface Props {
    navigation: any;
}

interface State {
    registered: boolean;
}

export default class Registration extends React.Component <Props, State> {

    static navigationOptions = headers("Registration");

    state = {
        registered : false,
        successMessage:''
    };

    constructor(props) {
        super(props);
        this.handleSuccess = this.handleSuccess.bind(this);
        this.handleOnLogin = this.handleOnLogin.bind(this);
    }

    handleSuccess (successMessage) {
        this.setState({registered : true,successMessage});
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    handleOnLogin () {
        this.props.navigation.goBack();
    }

    render () {
        const registration = !this.state.registered ? (
            <RegistrationForm
                onSuccess={this.handleSuccess} 
            />) : <RegistrationSuccess successMessage={this.state.successMessage}/>;

        return (
            <Container>
                <Content>
                    <ClearFix/>
                    {registration}
                    <ClearFix/>
                    <Button onPress={this.handleOnLogin} bordered block style={{marginHorizontal: 16}}>
                        <Text>Back to Login</Text> 
                    </Button>
                </Content>
            </Container>
        );
    }
}