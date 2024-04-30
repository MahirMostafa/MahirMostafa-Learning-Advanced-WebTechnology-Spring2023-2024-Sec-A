"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAdminStrategy = exports.JwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-user') {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: `${process.env.jwt_secret}`,
        });
    }
    async validate(payload) {
        return { user: payload.sub, username: payload.username };
    }
}
exports.JwtStrategy = JwtStrategy;
class JwtAdminStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-admin') {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: `${process.env.jwt_secret}`,
        });
    }
    async validate(payload) {
        if (payload.role !== 'admin') {
            throw new common_1.UnauthorizedException();
        }
        return { user: payload.sub, username: payload.username };
    }
}
exports.JwtAdminStrategy = JwtAdminStrategy;
//# sourceMappingURL=jwt-strategy.js.map