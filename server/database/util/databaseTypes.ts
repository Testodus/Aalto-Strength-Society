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

export interface UserCreationAttributes
  extends Optional<UserAttributes, 'id'> { } // eslint-disable-line
