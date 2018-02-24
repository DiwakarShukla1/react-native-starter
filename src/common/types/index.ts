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