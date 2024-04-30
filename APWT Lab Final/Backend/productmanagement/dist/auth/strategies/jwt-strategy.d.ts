import { Strategy } from "passport-jwt";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: any): Promise<{
        user: any;
        username: any;
    }>;
}
declare const JwtAdminStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAdminStrategy extends JwtAdminStrategy_base {
    constructor();
    validate(payload: any): Promise<{
        user: any;
        username: any;
    }>;
}
export {};
