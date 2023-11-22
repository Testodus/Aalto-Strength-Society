// This is the main file through which the models should be imported

import { User } from './user';
import { Notice } from './notice';
import { NoticeComment } from './noticeComment';

// FK of Notice to User.id
User.hasMany(Notice, {
  onDelete: 'CASCADE',
  hooks: true,
});
Notice.belongsTo(User);
// FKs of NoticeComment to User.id and Notice.id
User.hasMany(NoticeComment, {
  onDelete: 'CASCADE',
  hooks: true,
});
NoticeComment.belongsTo(User);
Notice.hasMany(NoticeComment, {
  onDelete: 'CASCADE',
  hooks: true,
});
NoticeComment.belongsTo(Notice);

User.sync();
Notice.sync();
NoticeComment.sync();

export { User, Notice, NoticeComment };
