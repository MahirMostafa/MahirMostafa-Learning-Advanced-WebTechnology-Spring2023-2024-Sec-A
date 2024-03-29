import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private jwtService: JwtService) {}



     
    // async validateUser(uemail: string, upassword: string) {
    //     const user = await this.userService.findOneWithEmail(uemail);
    //     if(!user){
    //         throw new NotFoundException("User Not Found");
    //     }

    //     if (user && (await bcrypt.compare(upassword, user.password))) {
    //         const { password, ...result } = user;
    
    //        const payload = {
    //               email: user.email,
    //               sub: {
    //                   name: user.firstName,
    //                   id: user.id,
    //                    },
    //          };

    //          return {
    //                    ...result,
    //                    accessToken: this.jwtService.sign(payload),
    //                   };

    //     }

    //     throw new UnauthorizedException("Password Not Matched");
    // }





    async validateUser(uemail: string, upassword: string) {
        const user = await this.userService.findOneWithEmail(uemail);

        if (user && (await bcrypt.compare(upassword, user.password))) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    async login(user: User) {
        const payload = {
            username: user.email,
            sub: {
                name: user.firstName,
            },
        };
        return {
            ...user,
            accessToken: this.jwtService.sign(payload),
        };
    }
 
    
}
