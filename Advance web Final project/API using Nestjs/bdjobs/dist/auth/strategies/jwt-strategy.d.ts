import { Strategy } from "passport-jwt";
import { AuthService } from "../auth.service";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(payload: any): Promise<{
        id: number;
        username: string;
        email: string;
        phonenumber: string;
        gender: string;
        role: string;
        salaryId: number;
        salary: import("src/salary/entities/salary.entity").Salary;
    }>;
}
declare const JwtAdminStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAdminStrategy extends JwtAdminStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(payload: any): Promise<{
        id: number;
        username: string;
        email: string;
        phonenumber: string;
        gender: string;
        role: string;
        salaryId: number;
        salary: import("src/salary/entities/salary.entity").Salary;
    }>;
}
export {};
