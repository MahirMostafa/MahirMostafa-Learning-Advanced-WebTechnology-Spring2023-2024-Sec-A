import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAdminAuthGuard, JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateAdminDto } from './dto/create-admin.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
 
  
  @Post('admin')
  createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.userService.createAdmin(createAdminDto);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }
  
  @UseGuards(JwtGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.userService.remove(+id);
    if (result) {
      return { message: 'User deleted successfully' };
    } else {
      throw new NotFoundException('User not found');
    }
  }
  
  
}
