import { RegistrationObj, Credentials, ServerResponse, ResetPassword, ForgotPassword } from './../types/index';
import HttpService from './HttpService';
import { AsyncStorage } from 'react-native';

const obj = {
    async hasToken() {
        const token = await AsyncStorage.getItem('apiToken');
        console.log("token", token);
        return token !== null ? true : false;
    },
    registration (registration: RegistrationObj) {
        const url = 'users';
        return HttpService.post(url, registration, true);
    },
    async login (credentials: Credentials) {
        const url = 'login';
        const result: ServerResponse = await HttpService.post(url, credentials, true);
        if (result.success) {
            await AsyncStorage.setItem('apiToken', result.data.token);
        }
        return result;
    },
    forgotPassword (forgotPassword: ForgotPassword) {
        const url = 'forgot';
        return HttpService.post(url, forgotPassword, true);
    },
    resetPassword (resetPassword: ResetPassword) {
        const url = 'reset';
        return HttpService.post(url, resetPassword, true);
    }
};

export default obj;