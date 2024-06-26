import { AuthService } from "../auth.service";
import { Strategy } from "passport-local";
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        address: string;
        role: string;
        salaryId: number;
        salary: import("src/salary/entities/salary.entity").Salary;
    }>;
}
export {};
