import { Controller, Get, Post, Body, Param, Delete, Put, UsePipes, ValidationPipe, Session, UnauthorizedException, UseGuards, HttpException, HttpStatus, Request } from '@nestjs/common';
import { EditProfileDto } from '../profile/dto/editprofile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '..//user/entities/user.entity';
import { Repository } from 'typeorm';
import { ProfileService } from './profile.service';
import {  JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtGuard)
@Controller('profile')
export class ProfileController {

  constructor(@InjectRepository(User) private readonly userRepo: Repository<User>,
  private readonly profileService: ProfileService) {} 

 


@Get('/')
async getProfile(@Request() req) {
  const user = await this.profileService.getUserProfile(req.user.id);
  console.log(user);
  return { success: true, user };
}


@Put('profile/edit')
@UsePipes(ValidationPipe)
async editProfile(@Body() editProfileDto: EditProfileDto, @Request() req) {
  const updatedUser = await this.profileService.editUserProfile(req.user.id, editProfileDto);
  return { success: true, user: updatedUser };
}


  
}