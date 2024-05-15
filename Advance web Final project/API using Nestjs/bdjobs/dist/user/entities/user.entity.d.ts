import { Salary } from "../../salary/entities/salary.entity";
export declare class User {
    id: number;
    username: string;
    email: string;
    phonenumber: string;
    gender: string;
    password: string;
    hashPassword(): Promise<void>;
    role: string;
    salaryId: number;
    salary: Salary;
}
