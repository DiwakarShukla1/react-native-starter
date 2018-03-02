import * as React from 'react';
import { View, Text, Keyboard} from 'react-native';
import { headers } from "../../../common/config";
import { ClearFix, LoadingButton } from "../../../common/components";
import { Container, Content } from "native-base";
import LoginForm from "./form";
import {NavigationActions} from 'react-navigation';
import { AuthService } from '../../../common/services';

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
        const navigate = NavigationActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:"ProfileWizard"})
            ]
        })
        this.props.navigation.dispatch(navigate);
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    handleOnRegister () {
        this.props.navigation.navigate("Registration");
    }

    handleOnForgotPassword () {
        Keyboard.dismiss();
        this.props.navigation.navigate("ForgotPassword")
    }

    async componentWillMount () {
        const hasToken = await AuthService.hasToken();
        if (hasToken) {
            this.handleSuccess();
        }
    }

    render () {
        return (
            <Container>
                <Content>
                    <ClearFix/>
                    <LoginForm 
                        onForgotPassword={this.handleOnForgotPassword}
                        onRegister={this.handleOnRegister}  
                        onSuccess={this.handleSuccess} />                        
                </Content>
            </Container>
        );
    }
}