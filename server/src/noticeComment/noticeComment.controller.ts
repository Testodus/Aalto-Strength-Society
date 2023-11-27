import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { NoticeCommentService } from './noticeComment.service';
import { JwtGuard } from 'src/auth/guard';
import { CreateNoticeCommentDto } from './dto';
import { GetUser } from 'src/auth/decorator';
import { adminID } from 'src/constants';

@Controller('notice/comment')
export class NoticeCommentController {
  constructor(private noticeCommentService: NoticeCommentService) {}

  @UseGuards(JwtGuard)
  @Post()
  createNoticeComment(@Body() noticeComment: CreateNoticeCommentDto) {
    return this.noticeCommentService.createNoticeComment(noticeComment);
  }

  /*@Get(':id')
  getNoticeComment(@Param('id') id: number) {
    return this.noticeCommentService.getNoticeComment(id);
  }*/

  @Get(':noticeId')
  getCommentsInNotice(@Param('noticeId') noticeId: number) {
    return this.noticeCommentService.getCommentsInNotice(noticeId);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  deleteNoticeComment(
    @GetUser() user: { userID: number },
    @Param('id') id: number
  ) {
    this.noticeCommentService.getNoticeComment(id).then(noticeComment => {
      if (
        user.userID.toString() == noticeComment.userId.toString() ||
        user.userID.toString() == adminID.toString()
      ) {
        this.noticeCommentService.deleteNoticeComment(id);
      } else {
        throw new UnauthorizedException();
      }
    });
  }
}
