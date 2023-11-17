// This is the main file through which the models should be imported

import { User } from './user';
import { Notice } from './notice';
import { NoticeComment } from './noticeComment';

// FK of Notice to User.id
User.hasMany(Notice);
Notice.belongsTo(User);
// FKs of NoticeComment to User.id and Notice.id
User.hasMany(NoticeComment);
NoticeComment.belongsTo(User);
Notice.hasMany(NoticeComment);
NoticeComment.belongsTo(Notice);

export { User, Notice, NoticeComment };
