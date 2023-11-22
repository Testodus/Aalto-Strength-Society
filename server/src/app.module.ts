import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NoticeModule } from './notice/notice.module';
import { NoticeCommentModule } from './noticeComment/noticeComment.module';

@Module({
  imports: [AuthModule, UserModule, NoticeModule, NoticeCommentModule],
})
export class AppModule {}
