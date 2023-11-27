/**
 * This is a file for shared types
 *
 * Used for building the front-side
 *
 * TODO: think about these
 */

export type PageInfo = {
  name: string;
  title: string;
  textContent: Array<string>;
  imageSrc?: string;
};

export type Board = {
  members: Array<BoardMember>;
  year: number;
};

export type BoardMember = {
  name: string;
  role: string;
  contact: string;
};

export type Notice = {
  userID: number;
  timeStamp?: string;
  title: string;
  notice: string;
  imageSrc?: string;
  noticeID: number;
  comments?: Array<Comment>;
  username?: string;
};

export type Comment = {
  userID: number;
  timeStamp?: string;
  comment: string;
  commentID?: number;
  noticeID: number;
  username?: string;
};

export type NoticeBoard = {
  title: string;
  notices: Array<Notice>;
  description: string;
};

export type Profile = {
  userID: number;
  username: string;
  favouriteLift?: string;
  contactInfo?: string;
  email: string;
  profilePicture?: string;
};
