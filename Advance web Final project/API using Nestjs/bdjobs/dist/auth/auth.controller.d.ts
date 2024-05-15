import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    Login(req: any, session: any): Promise<any>;
    Signup(userDTO: CreateUserDto): Promise<import("src/user/entities/user.entity").User>;
    Logout(session: any): Promise<string>;
}
