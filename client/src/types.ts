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

export type Note = {
  userID: string;
  timestamp: number;
  title: string;
  note: string;
  imageSrc?: string;
};

export type NoticeBoard = {
  title: string;
  notes: Array<Note>;
};

export type Profile = {
  userID: string;
  username: string;
};
