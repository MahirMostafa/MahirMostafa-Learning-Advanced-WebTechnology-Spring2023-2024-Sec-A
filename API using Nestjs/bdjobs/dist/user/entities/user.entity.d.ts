import { Salary } from "../../salary/entities/salary.entity";
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    hashPassword(): Promise<void>;
    address: string;
    role: string;
    salaryId: number;
    salary: Salary;
}
