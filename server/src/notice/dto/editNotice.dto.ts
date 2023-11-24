import { IsOptional } from 'class-validator';

export class EditNoticeDto {
  @IsOptional()
  title: string;

  @IsOptional()
  text: string;

  @IsOptional()
  picture: string;
}
