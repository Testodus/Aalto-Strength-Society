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
  userID: string;
  timeStamp: number;
  title: string;
  notice: string;
  imageSrc?: string;
};

export type NoticeBoard = {
  title: string;
  notices: Array<Notice>;
};

export type Profile = {
  userID: string;
  username: string;
};
