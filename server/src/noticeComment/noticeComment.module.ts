import { Module } from '@nestjs/common';
import { NoticeCommentController } from './noticeComment.controller';
import { NoticeCommentService } from './noticeComment.service';

@Module({
  controllers: [NoticeCommentController],
  providers: [NoticeCommentService],
})
export class NoticeCommentModule {}
