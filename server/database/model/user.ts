import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../util/db';
import {
  UserAttributes,
  UserCreationAttributes,
} from 'database/util/databaseTypes';

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes { //eslint-disable-line
  public id!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public profilePicture?: string | null;
  public typeOfLifting?: string | null;
  public favouriteLift?: string | null;
  public favouriteGym?: string | null;
  public favouriteGymTime?: string | null;
  public contactInfo?: string | null;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Username must be unique
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Email must be unique
    },
    profilePicture: {
      type: DataTypes.STRING, // Optional profile picture URL pointing to some external image hosting website
    },
    typeOfLifting: {
      type: DataTypes.STRING, // E.g. Are they interested in powerlifting, crossfit, weightlifting, bodybuilding etc.
    },
    favouriteLift: {
      type: DataTypes.STRING, // E.g. Bench, squat, OHP, hammer curl
    },
    favouriteGym: {
      type: DataTypes.STRING, // E.g. Unisport Otaniemi, Liikku A bloc, Unisport Meilahti
    },
    favouriteGymTime: {
      type: DataTypes.STRING, // E.g. Usually from 18-20 in weekdays, or Sundays 13-15
    },
    contactInfo: {
      type: DataTypes.STRING, // E.g. Telegram nick: @lifterDude99
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'user',
  }
);

export { User };
