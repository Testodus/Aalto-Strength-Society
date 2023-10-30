import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NoticeModule } from './notice/notice.module';
import { NoticeBoardModule } from './noticeBoard/noticeBoard.module';

@Module({
  imports: [AuthModule, NoticeModule, NoticeBoardModule, UserModule],
})
export class AppModule {}
