import { ServerResponse } from '../types/index';
const BASE_URL = 'http://192.168.0.112:3001/';
import { AsyncStorage } from 'react-native';

enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

const doHttpCall = async (url: string, method: string, body?: object, doNotUseToken?: boolean, isForUpload =false): Promise<ServerResponse> => {
    const basicAuth = !doNotUseToken ? await AsyncStorage.getItem('apiToken') : undefined;
    const NEW_URL = BASE_URL + url;

    return new Promise((resolve, reject) => {
        let options = {method};

        if (body) {
            options.body = isForUpload ? body : JSON.stringify(body);
        }

        options.headers = new Headers();
        if (!isForUpload) {
            options.headers.append('Content-Type', 'application/json');
        }

        if (basicAuth) {
            options.headers.append("Authorization", basicAuth);
        }

        fetch(NEW_URL, options)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            resolve(response);
        }).catch((message)=> {
            reject(message);
        });
    });
};

const obj = {
    get (url: string, doNotUseToken?: boolean): Promise<ServerResponse> {
        return doHttpCall(url, METHODS.GET, undefined, doNotUseToken);
    },
    post (url: string, body: object, doNotUseToken?: boolean): Promise<ServerResponse> {
        return doHttpCall(url, METHODS.POST, body, doNotUseToken);
    },
    put (url: string, body: object, doNotUseToken?: boolean): Promise<ServerResponse> {
        return doHttpCall(url, METHODS.PUT, body, doNotUseToken);
    },
    delete (url: string) {
        return doHttpCall(url, METHODS.DELETE);
    },
    async uploadResume (url: string, file: Blob) {
        const body = new FormData();
        body.append('file', file);
        // body.append('data', data);
        return doHttpCall(url, METHODS.POST, body, true, true);
    },
};

export default obj;