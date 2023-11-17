import { Injectable } from '@nestjs/common';
import fs from 'fs';
import { NoticeDto } from './dto';

@Injectable({})
export class NoticeService {
  // TODO: Possibly useful operations: get one single notice?

  createNotice(notice: NoticeDto) {
    // TODO: Create one single new notice.
  }

  getAllNotices() {
    // TODO: Fetch all notices?
  }

  deleteNotice() {
    // TODO: Delete one single notice, by id.
  }
}
