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
  constact: string;
};
