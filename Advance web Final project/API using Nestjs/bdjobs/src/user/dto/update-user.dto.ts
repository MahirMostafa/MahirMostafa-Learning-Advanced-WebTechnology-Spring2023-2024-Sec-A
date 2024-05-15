import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, Matches } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
 
@IsString()
@IsNotEmpty()
username : string;

@IsEmail()
@IsNotEmpty()
email : string;

//@IsPhoneNumber("BD")
@IsNotEmpty({message: 'Fill the Phone Number'})
//@Matches((/([01]|\+88)?\d{11}/),{message: 'invaid Phone Number!'})
phonenumber: string;

@IsString()
@IsNotEmpty({message: 'Fill the Gender'})
gender: string;

@IsNotEmpty({message: 'Fill the Date of Birth'})
 dob: Date;

@IsString()
@IsNotEmpty()
password : string;
}
