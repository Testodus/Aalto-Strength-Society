import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  UseGuards,
  UnauthorizedException,
  Patch,
} from '@nestjs/common';
import { NoticeService } from './notice.service';
import { JwtGuard } from '../auth/guard';
import { NoticeDto } from './dto';
import { adminID } from 'src/constants';
import { GetUser } from 'src/auth/decorator';
import { getNoticeByID } from 'src/vadePlsCode';
import { EditNoticeDto } from './dto/editNotice.dto';

@Controller('notice')
export class NoticeController {
  constructor(private noticeService: NoticeService) {}

  @UseGuards(JwtGuard)
  @Post()
  createNotice(@Body() notice: NoticeDto) {
    return this.noticeService.createNotice(notice);
  }

  @Get(':id')
  getNotice(@Param('id') id: number) {
    return this.noticeService.getNotice(id);
  }

  @Get()
  getAllNotices() {
    return this.noticeService.getAllNotices();
  }
  @UseGuards(JwtGuard)
  @Delete(':id')
  deleteNotice(@GetUser() user: { userID: number }, @Param('id') id: number) {
    // Get notice, to get userId
    // Check that userId is the same as in toke or adminId.
    getNoticeByID(id).then(notice => {
      if (
        user.userID.toString() == notice.userId.toString() ||
        user.userID.toString() == adminID.toString()
      ) {
        this.noticeService.deleteNotice(id);
      } else {
        throw new UnauthorizedException();
      }
    });
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  editNotice(
    @GetUser() user: { userID: number },
    @Param('id') noticeId: number,
    @Body() dto: EditNoticeDto
  ) {
    return getNoticeByID(noticeId).then(notice => {
      if (
        user.userID.toString() == notice.userId.toString() ||
        user.userID.toString() == adminID.toString()
      ) {
        return this.noticeService.editNotice(noticeId, dto);
      } else {
        throw new UnauthorizedException();
      }
    });
  }
}
