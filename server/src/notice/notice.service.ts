import { Injectable } from '@nestjs/common';
import {
  createNotice,
  deleteNotice,
  getAllNotices,
  getNoticeByID,
  updateNotice,
} from 'src/vadePlsCode';
import { NoticeDto, EditNoticeDto } from './dto';

@Injectable({})
export class NoticeService {
  createNotice(notice: NoticeDto) {
    return createNotice(notice);
  }

  getNotice(id: number) {
    return getNoticeByID(id);
  }

  getAllNotices() {
    return getAllNotices();
  }

  deleteNotice(id: number) {
    deleteNotice(id);
  }

  editNotice(noticeId: number, dto: EditNoticeDto) {
    return updateNotice({ ...dto, id: noticeId });
  }
}
