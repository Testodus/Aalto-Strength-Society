import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { NoticeModule } from './notice/notice.module';

@Module({
  imports: [AuthModule, NoticeModule, UserModule],
})
export class AppModule {}
