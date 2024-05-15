import {IsEmail, IsEmpty, IsNotEmpty, IsPhoneNumber, IsString, Matches} from 'class-validator';
export class CreateAdminDto {

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
    
    
    @IsString()
    @IsNotEmpty()
    password : string;

     @IsNotEmpty()
     salaryId : number;

}