import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import { AuthService } from "../auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt-user'){
    
    constructor(private authService: AuthService){
        super(
            {
               // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
               jwtFromRequest: (req) => {         
                return req.headers['authorization'];
              },
                ignoreExpiration: false,
                secretOrKey: `${process.env.jwt_secret}`,
            }
        );
    }

    async validate(payload:any ){
          const user = await this.authService.jwtUserDetails(payload);
         return user;
    }
}

@Injectable()
export class JwtAdminStrategy extends PassportStrategy(Strategy, 'jwt-admin') {
    constructor(private authService: AuthService) {
        super({
           // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
           jwtFromRequest: (req) => {         
            return req.headers['authorization'];
          },
            ignoreExpiration: false,
            secretOrKey: `${process.env.jwt_secret}`,
        });
    }

    async validate(payload: any) {
        const user = await this.authService.jwtUserDetails(payload);
        if (user.role === 'admin') {
            return user;
        }
        else{
            throw new UnauthorizedException();
        }
    }
}