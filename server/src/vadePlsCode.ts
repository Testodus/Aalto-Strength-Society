import { User, Notice, NoticeComment } from '../database/model/index';
import {
  UserAttributes,
  UserCreationAttributes,
} from 'database/util/databaseTypes';

// Creates new user, returns id & email
export const createUser = async (newUser: UserCreationAttributes) => {
  // Takes userObject as input
  // Creaters user in database. Crerates id for user.
  // Returns userObject with fields: id, email
  console.log('newUser', newUser);
  const newUserInDB: UserAttributes = await User.create(newUser);
  const createdUser = {
    userID: newUserInDB.id,
    email: newUserInDB.email,
  };
  console.log('createdUser', createdUser);
  return createdUser;
};

// Based on email, returns: email, password, userID
export const getPartialUser = (email: string) => {
  return {
    email: 'muscleMania@gmail.com',
    userID: 123456,
    password: '$2b$10$0qXy7foXCf1KW5qw63nI2.mgAti0CPfHQaxz4Ksn7yn3BjgZ/G2um',
  };
};

export const getUser = () => { }; // eslint-disable-line
