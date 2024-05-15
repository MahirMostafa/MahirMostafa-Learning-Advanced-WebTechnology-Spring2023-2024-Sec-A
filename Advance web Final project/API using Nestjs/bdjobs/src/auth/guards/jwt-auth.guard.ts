import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtGuard extends AuthGuard('jwt-user'){}
@Injectable()
export class JwtAdminAuthGuard extends AuthGuard('jwt-admin'){}