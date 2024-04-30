export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    hashPassword(): Promise<void>;
    address: string;
    role: string;
}
