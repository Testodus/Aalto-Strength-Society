import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { NoticeDto } from './dto';

// TODO: Should I make dto for all methods, so that unnecessary and potentially harmful can be blocked better?
@Controller('notice')
export class NoticeController {
  constructor(private noticeService: NoticeService) {}

  @Post('create')
  createNotice(@Body() notice: NoticeDto) {
    // TODO: Create one single new notice.
    return this.noticeService.createNotice(notice);
  }

  @Get('get-all')
  getAllNotices() {
    // TODO: Fetch all notices?
    return this.noticeService.getAllNotices();
  }

  @Delete('delete')
  deleteNotice(@Body() id: string) {
    // TODO: Delete one single notice, by id.
    return this.noticeService.deleteNotice();
  }
}
