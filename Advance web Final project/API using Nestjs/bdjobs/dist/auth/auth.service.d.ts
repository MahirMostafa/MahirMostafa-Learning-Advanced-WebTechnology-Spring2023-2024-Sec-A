import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(uemail: string, upassword: string): Promise<{
        id: number;
        username: string;
        email: string;
        phonenumber: string;
        gender: string;
        role: string;
        salaryId: number;
        salary: import("src/salary/entities/salary.entity").Salary;
    }>;
    getJwtToken(user: any): Promise<{
        access_token: string;
    }>;
    jwtUserDetails(payload: any): Promise<{
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
