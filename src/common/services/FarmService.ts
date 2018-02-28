import HttpService from "./HttpService";
import { FarmObj } from "../types";

const obj = {
    getAllMyFarms () {
        const url = 'farms';
        return HttpService.get(url);
    },
    getAFarm (id: string) {
        const url = `farms/${id}`;
        return HttpService.get(url);
    },
    createFarm(body: FarmObj) {
        const url = `farms`;
        return HttpService.post(url, body);
    },
    updateFarm(id: string, body: FarmObj) {
        const url = `farms/${id}`;
        return HttpService.put(url, body);
    },
    deleteFarm(id: string) {
        const url = `farms/${id}`;
        return HttpService.delete(url);
    }
};

export default obj;