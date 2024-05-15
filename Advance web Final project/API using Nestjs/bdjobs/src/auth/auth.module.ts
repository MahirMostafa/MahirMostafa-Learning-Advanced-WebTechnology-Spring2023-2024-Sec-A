import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local-strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { JwtStrategy } from './strategies/jwt-strategy';
import { JwtAdminStrategy } from './strategies/jwt-strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [AuthService ,UserService,LocalStrategy,JwtStrategy,JwtAdminStrategy],
  controllers: [AuthController],

  imports:[
    UserModule, 
    PassportModule,
    TypeOrmModule.forFeature([User]),
    
    JwtModule.register({
    secret: `${process.env.jwt_secret}`,
    signOptions:{expiresIn:"3600s"},
  }),
],
exports: [AuthService]
})
export class AuthModule {}
