import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserSkillService } from './user-skill.service';
import { CreateUserSkillDto } from './dto/create-user-skill.dto';
import { UpdateUserSkillDto } from './dto/update-user-skill.dto';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user-skill')
export class UserSkillController {
  constructor(private readonly userSkillService: UserSkillService) {}

  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createUserSkillDto: CreateUserSkillDto) {
    return this.userSkillService.create(createUserSkillDto);
  }

  @UseGuards(JwtGuard)
  @Get(':userId')
  findAll(@Param('userId') userId : number) {
    
    return this.userSkillService.findUsersSkills(userId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userSkillService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserSkillDto: UpdateUserSkillDto) {
  //   return this.userSkillService.update(+id, updateUserSkillDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userSkillService.remove(+id);
  // }
}
