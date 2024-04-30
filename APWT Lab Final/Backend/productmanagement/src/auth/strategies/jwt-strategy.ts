import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";

export class JwtStrategy extends PassportStrategy(Strategy,'jwt-user'){
    
    constructor(){
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                ignoreExpiration: false,
                secretOrKey: `${process.env.jwt_secret}`,
            }
        );
    }

    async validate(payload:any ){
        return { user: payload.sub,username: payload.username}
    }
}

export class JwtAdminStrategy extends PassportStrategy(Strategy, 'jwt-admin') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: `${process.env.jwt_secret}`,
        });
    }

    async validate(payload: any) {
        if (payload.role !== 'admin') {
            throw new UnauthorizedException();
        }
        return { user: payload.sub, username: payload.username };
    }
}