// This is the main file through which the models should be imported

import { User } from './user';
import { Notice } from './notice';
import { NoticeComment } from './noticeComment';

// FK of Notice to User.id
User.hasMany(Notice);
// FKs of NoticeComment to User.id and Notice.id
User.hasMany(NoticeComment);
Notice.hasMany(NoticeComment);

export { User, Notice, NoticeComment };
