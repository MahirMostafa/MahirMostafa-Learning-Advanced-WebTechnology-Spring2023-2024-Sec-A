import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(uemail: string, upassword: string): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        address: string;
        role: string;
    }>;
    login(user: User): Promise<{
        accessToken: string;
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        address: string;
        role: string;
    }>;
}
