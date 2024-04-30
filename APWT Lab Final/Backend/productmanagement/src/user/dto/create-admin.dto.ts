import {IsEmail, IsEmpty, IsNotEmpty, IsString} from 'class-validator';
export class CreateAdminDto {

@IsString()
@IsNotEmpty()
firstName : string;
@IsString()
@IsNotEmpty()
lastName : string;
@IsEmail()
@IsNotEmpty()
email : string;
@IsString()
@IsNotEmpty()
password : string;
@IsString()
@IsNotEmpty()
address : string;

}