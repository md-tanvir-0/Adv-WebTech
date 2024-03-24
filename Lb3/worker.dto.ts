import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength, ValidateIf, isNotEmpty } from "class-validator";


export class WorkerDTO {

   @IsNotEmpty({message: 'Name is required'})
   @MaxLength(50, {message: 'Name should be maximum 50 character long'})
   name : string;

   @IsEmail({}, {message: 'Invalid Email'})
   @MinLength(5, {message: 'Email must be at least 5 characters long'})
   emailAddress : string;

   @MinLength(6, {message: 'Password must be at least 6 characters long'})
   @Matches(/^(?=.*[a-z]).+$/, {message: 'Password must contain at least one lowercase character'})
   password : string;

   @IsNotEmpty({message: 'Education field is required'})
   education : string;

   @Matches(/\.(pdf)$/, {message: 'CV must be in PDF format'})
   cvFile : string;

   @Matches(/^0/, {message: 'Phone Number must start with 0'})
   phoneNumber : string;
}