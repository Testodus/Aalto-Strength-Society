import { QueryInterface, Optional } from 'sequelize';

export type migrationQueryInterface = {
  context: QueryInterface;
};

export interface UserAttributes {
  id: number;
  username: string;
  password: string;
  email: string;
  profilePicture?: string | null;
  typeOfLifting?: string | null;
  favouriteLift?: string | null;
  favouriteGym?: string | null;
  favouriteGymTime?: string | null;
  contactInfo?: string | null;
}

export interface UpdateUserAttributes {
  id: number;
  profilePicture?: string | null;
  typeOfLifting?: string | null;
  favouriteLift?: string | null;
  favouriteGym?: string | null;
  favouriteGymTime?: string | null;
  contactInfo?: string | null;
}

export interface NoticeAttributes {
  id: number;
  title: string;
  text: string;
  picture?: string | null;
  createdAt: string;
  userId: number;
}

// Only the id is mandatory in UpdateNoticeAttributes
export interface UpdateNoticeAttributes
  extends Optional<NoticeAttributes, 'createdAt' | 'userId' | 'title' | 'text' | 'picture'> { } // eslint-disable-line

export interface NoticeCommentAttributes {
  id: number;
  text: string;
  createdAt: string;
  userId: number;
  noticeId: number;
}

export interface UserCreationAttributes
  extends Optional<UserAttributes, 'id'> { } // eslint-disable-line

export interface NoticeCreationAttributes
  extends Optional<NoticeAttributes, 'id' | 'createdAt'> { } // eslint-disable-line

export interface NoticeCommentCreationAttributes
  extends Optional<NoticeCommentAttributes, 'id' | 'createdAt'> { } // eslint-disable-line
