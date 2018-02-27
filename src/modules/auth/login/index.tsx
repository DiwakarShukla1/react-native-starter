import * as React from 'react';
import { View, Text } from 'react-native';
import { headers } from "../../../common/config";
import { Clearfix, LoadingButton } from "../../../common/components";
import { Container, Content } from "native-base";
import LoginForm from "./form";

interface Props {
    navigation : any;
}

interface State {

}

export default class Login extends React.Component <Props, State> {

    static navigationOptions = headers("Login");

    constructor(props) {
        super(props);
        this.handleSuccess = this.handleSuccess.bind(this);
        this.handleOnForgotPassword = this.handleOnForgotPassword.bind(this);
        this.handleOnRegister = this.handleOnRegister.bind(this);
    }

    handleSuccess () {
        this.props.navigation.navigate("Registration");
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    handleOnRegister () {
        this.props.navigation.navigate("Registration");
    }

    handleOnForgotPassword () {
        
    }

    render () {
        return (
            <Container>
                <Content>
                    <Clearfix/>
                    <LoginForm 
                        onForgotPassword={this.handleOnForgotPassword}
                        onRegister={this.handleOnRegister}  
                        onSuccess={this.handleSuccess} />                        
                </Content>
            </Container>
        );
    }
}