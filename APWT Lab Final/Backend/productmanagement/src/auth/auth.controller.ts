import { Controller, Post , Request, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

interface RequestWithUser extends Request {
  user: any; 
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req: RequestWithUser){
    return await this.authService.login(req.user);
  }
}

