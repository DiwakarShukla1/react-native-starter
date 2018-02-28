export interface RegistrationObj {
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    password: string;
    confirmPassword: string;
    address: string;
}

export interface Credentials {
    email: string;
    password: string;
}

export interface ResetPassword {
    otp: Number;
    password: string;
    confirm: string;
}

export interface ForgotPassword {
    email: string;
}

export interface ServerResponse {
    success: boolean;
    errors?: object[];
    message?: string;
    data: any;
}

export interface ProfileObj {
    contactNumber : string,
    facebook?: string,
    twitter?: string,
    google?: string,
    linkedIn? : string,
    profilePicURL? : string,
    idPicURL?: string,
    firstName: string,
    lastName : string,
    address : string,
    buildingSize : number,
    yearOfBuildingConstruction : number,
    stateOfResidence : string,
    nameOfOwner? : string,
    contactNumberOfOwner? : string,
    emailOfOwner? : string
}

export interface StepObj {
    step : number
} 

export interface FamilyMemberObj {
    firstName : string,
    lastName : string,
    relationWithYou : string,
    dateOfBirth : Date,
    isStudent : boolean,
    nameOfSchool? : string,
    gradeOfSchool? : string,
    occupation? : string,
    highestEducation? : string,
    lastInstituteAttended? : string
}