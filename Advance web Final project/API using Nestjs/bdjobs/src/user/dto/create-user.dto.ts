import {IsEmail, IsEmpty, IsNotEmpty, IsPhoneNumber, IsString, Matches} from 'class-validator';
export class CreateUserDto {

@IsString()
@IsNotEmpty()
username : string;

@IsEmail()
@IsNotEmpty()
email : string;

@IsNotEmpty({message: 'Fill the Phone Number'})
phonenumber: string;

@IsString()
@IsNotEmpty({message: 'Fill the Gender'})
gender: string;

@IsString()
@IsNotEmpty()
password : string;

}
