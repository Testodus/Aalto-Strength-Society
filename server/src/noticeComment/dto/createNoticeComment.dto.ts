import { IsDefined } from 'class-validator';

export class CreateNoticeCommentDto {
  @IsDefined()
  text: string;

  @IsDefined()
  noticeId: number;

  @IsDefined()
  userId: number;
}
