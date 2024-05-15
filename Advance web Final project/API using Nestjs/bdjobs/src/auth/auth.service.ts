import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private jwtService: JwtService) {}




    async validateUser(uemail: string, upassword: string) {
        const user = await this.userService.findOneWithEmail(uemail);

        if (user && (await bcrypt.compare(upassword, user.password))) {
            const { password, ...result } = user;
            return result;
        }

         return null;
    }

    // async login(user: User) {
    //     const payload = {
    //         sub: user.id,
    //         username: user.email,
    //         name: user.firstName,
    //         role: user.role,
    //     };
    //     return {
    //         ...user,
    //         accessToken: this.jwtService.sign(payload),
    //     };
    // }
    async getJwtToken(user: any){
        const payload = { name: user.name, sub: user.id};
    
        return{
            access_token: this.jwtService.sign(payload) 
        };
    }

    
    async jwtUserDetails(payload: any){
        const user = await this.userService.findOne(payload.sub);
        const{password, ...rest} = user;
        return rest;
    }
 
    
}
