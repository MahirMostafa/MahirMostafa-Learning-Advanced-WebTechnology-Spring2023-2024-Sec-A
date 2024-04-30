import { AuthService } from './auth.service';
interface RequestWithUser extends Request {
    user: any;
}
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: RequestWithUser): Promise<{
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
export {};
