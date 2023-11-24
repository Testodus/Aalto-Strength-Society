import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';

export class NoticeDto {
  @IsDefined()
  title: string;

  @IsDefined()
  text: string;

  @IsOptional()
  picture: string;

  @IsNotEmpty()
  userId: number;
}
