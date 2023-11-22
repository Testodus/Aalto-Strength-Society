import { IsOptional } from 'class-validator';

export class EditDto {
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
