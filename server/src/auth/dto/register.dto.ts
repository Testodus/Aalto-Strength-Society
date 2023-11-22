import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

/* User profile
Mandatory
- email
- username
- password

Optional
- profile picture
- favourite type of lifting
- favourite lift
- favourite gym
- most common gym times
- contact info
*/

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  profilePicture: string;

  @IsOptional()
  typeOfLifting: string;

  @IsOptional()
  favouriteLift: string;

  @IsOptional()
  favouriteGym: string;

  @IsOptional()
  favouriteGymTime: string;

  @IsOptional()
  contactInfo: string;
}
