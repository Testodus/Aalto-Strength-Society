import { User, Notice, NoticeComment } from '../database/model/index';
import {
  UserAttributes,
  UserCreationAttributes,
} from 'database/util/databaseTypes';

// ---------- USER --------------
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
export const getPartialUser = async (email: string) => {
  const userByEmail = await User.findOne({
    where: {
      email: email,
    },
  });
  const partialUser = {
    email: userByEmail?.email,
    userID: userByEmail?.id,
    password: userByEmail?.password,
  };
  console.log('partialUser', partialUser);
  return partialUser;
};

// Gets user by ID and returns all the details of the user
export const getUser = async (id: number) => {
  const userByID = await User.findByPk(id);
  const userToJSON = userByID?.toJSON();
  console.log(userToJSON);
  return userToJSON;
};

// Gets all users and their full details
export const getAllUsers = async () => {
  const users = await User.findAll();
  const prunedUsers = users.map(user => user.dataValues);
  console.log(prunedUsers);
  // returns the current data values of the users in an array
  return prunedUsers;
};

// For updating email of user
// (Similar logic to all the other updations. Need to think whether there is a way to prevent duplication)
export const updateUserEmail = async (id: number, newEmail: string) => {
  const user = await User.findByPk(id);
  if (user) {
    console.log('old email: ', user.email);
    user.email = newEmail;
    await user.save();
    console.log('new email: ', user.email);
  } else {
    return Error('User does not exist, cant update email');
  }
};

export const updateUserPicture = async (id: number, newPicture: string) => {
  const user = await User.findByPk(id);
  if (user) {
    console.log('old picture: ', user.profilePicture);
    user.profilePicture = newPicture;
    await user.save();
    console.log('new picture: ', user.profilePicture);
  } else {
    return Error('User does not exist, cant update profile picture');
  }
};

// -------- NOTICES ------------
export const createNotice = async () => {
  // TO-DO
};

export const getNoticeByID = async () => {
  // TO-DO
};

export const getAllNotices = async () => {
  // TO-DO
};

export const getCommentsInNotice = async () => {
  // TO-DO
};
