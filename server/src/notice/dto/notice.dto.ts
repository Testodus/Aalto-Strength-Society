import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';

export class NoticeDto {
  @IsDefined()
  noticeTile: string;

  @IsDefined()
  noticeText: string;

  //TODO: Mitä aikaa käytettään?
  @IsNotEmpty()
  timestamp: string;

  @IsOptional()
  noticePicture: string;

  @IsNotEmpty()
  userID: string;

  @IsNotEmpty()
  boardID: string;
}
