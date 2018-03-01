import HttpService from "./HttpService";
import { ProfileObj, StepObj } from "../types";

const obj = {
    updateProfile (body: ProfileObj) {
        const url = 'profile';
        return HttpService.put(url, body);
    },
    getProfile () {
        const url = 'profile';
        return HttpService.get(url);
    },
    getStep () {
        const url = 'steps';
        return HttpService.get(url);
    }, 
    updateStep (body: StepObj) {
        const url = 'steps';
        return HttpService.put(url, body);
    }
};

export default obj;