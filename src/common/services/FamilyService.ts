import HttpService from "./HttpService";
import { FamilyMemberObj } from "../types";

const obj = {
    getAllMyFamilyMembers () {
        const url = 'familyMembers';
        return HttpService.get(url);
    },
    getAFamilyMembers (id: string) {
        const url = `familyMembers/${id}`;
        return HttpService.get(url);
    },
    createFamilyMember(body: FamilyMemberObj) {
        const url = `familyMembers`;
        return HttpService.post(url, body);
    },
    updateFamilyMember(id: string, body: FamilyMemberObj) {
        const url = `familyMembers/${id}`;
        return HttpService.put(url, body);
    },
    deleteFamilyMember(id: string) {
        const url = `familyMembers/${id}`;
        return HttpService.delete(url);
    }
};

export default obj;