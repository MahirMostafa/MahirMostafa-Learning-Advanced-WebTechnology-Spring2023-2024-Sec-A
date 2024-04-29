import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        accessToken: string;
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        address: string;
        role: string;
        salaryId: number;
        salary: import("src/salary/entities/salary.entity").Salary;
    }>;
}
