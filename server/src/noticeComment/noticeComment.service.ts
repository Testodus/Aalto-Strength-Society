import { Injectable } from '@nestjs/common';
import {
  createNoticeComment,
  deleteNoticeComment,
  getCommentsInNotice,
  getNoticeCommentByID,
} from 'src/vadePlsCode';
import { CreateNoticeCommentDto } from './dto';

@Injectable({})
export class NoticeCommentService {
  createNoticeComment(noticeComment: CreateNoticeCommentDto) {
    return createNoticeComment(noticeComment);
  }

  getNoticeComment(id: number) {
    return getNoticeCommentByID(id);
  }

  getCommentsInNotice(noticeId: number) {
    return getCommentsInNotice(noticeId);
  }

  deleteNoticeComment(id: number) {
    deleteNoticeComment(id);
  }
}
