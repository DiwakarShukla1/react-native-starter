import * as React from 'react';
import { View, Text } from 'react-native';
import { headers } from "../../../common/config";
import { LoadingButton } from "../../../common/components";
import { Container, Content } from "native-base";
import LoginForm from "./form";

interface Props {

}

interface State {

}

export default class Login extends React.Component <Props, State> {

    static navigationOptions = headers("Login");

    constructor(props) {
        super(props);
        this.handleSuccess = this.handleSuccess.bind(this);
    }

    handleSuccess () {
        this.props.navigation.navigate("Registration");
    }

    render () {
        return (
            <Container>
                <Content>
                    <LoginForm onSuccess={this.handleSuccess} />
                </Content>
            </Container>
        );
    }
}