import { ForbiddenException } from '@nestjs/common';
import { User, Notice, NoticeComment } from '../database/model/index';
import {
  NoticeAttributes,
  NoticeCreationAttributes,
  UserAttributes,
  UserCreationAttributes,
  NoticeCommentAttributes,
  NoticeCommentCreationAttributes,
  UpdateUserAttributes,
  UpdateNoticeAttributes,
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

// Gets user by email
export const getUserByUsername = async (username: string) => {
  const userByUsername = await User.findOne({
    where: {
      username: username,
    },
  });
  console.log(JSON.stringify(userByUsername, null, 2));
  return userByUsername;
};

// Gets all users and their full details
export const getAllUsers = async () => {
  const users = await User.findAll();
  const prunedUsers = users.map(user => user.dataValues);
  console.log(prunedUsers);
  // returns the current data values of the users in an array
  return prunedUsers;
};

// Returns the user object and the notices she/he has posted
export const getUsersNotices = async (userId: number) => {
  const user = await User.findByPk(userId, {
    include: [
      {
        model: Notice,
      },
    ],
  });
  if (user) {
    console.log(JSON.stringify(user, null, 2));
    return user;
  } else {
    return Error('User does not exist');
  }
};

export const updateUser = async (user: UpdateUserAttributes) => {
  console.log('user', user);
  try {
    const userToUpdate = await User.findByPk(user.id);
    if (userToUpdate) {
      // Update each field
      userToUpdate.profilePicture = user.profilePicture;
      userToUpdate.typeOfLifting = user.typeOfLifting;
      userToUpdate.favouriteLift = user.favouriteLift;
      userToUpdate.favouriteGym = user.favouriteGym;
      userToUpdate.favouriteGymTime = user.favouriteGymTime;
      userToUpdate.contactInfo = user.contactInfo;
      await userToUpdate.save();

      console.log('userToUpdate.dataValues', userToUpdate.dataValues);
      // Lets not return passwords and such
      const updatedUserToReturn: UpdateUserAttributes = {
        id: userToUpdate.id,
        profilePicture: userToUpdate.profilePicture,
        typeOfLifting: userToUpdate.typeOfLifting,
        favouriteLift: userToUpdate.favouriteLift,
        favouriteGym: userToUpdate.favouriteGym,
        favouriteGymTime: userToUpdate.favouriteGymTime,
        contactInfo: userToUpdate.contactInfo,
      };
      console.log('updatedUserToReturn', updatedUserToReturn);
      return updatedUserToReturn;
    } else {
      throw new ForbiddenException(
        `Could not update the user: There is no user with such id as: ${user.id}`
      );
    }
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to update the user: ${error}`
    );
  }
};

export const deleteUser = async (userId: number) => {
  try {
    const userToDelete = await User.findByPk(userId);
    console.log('userToDelete', userToDelete);
    if (userToDelete) {
      await userToDelete.destroy();
    } else {
      throw new ForbiddenException(
        `Could not delete the user: There is no user with such id as: ${userId}`
      );
    }
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to delete the user: ${error}`
    );
  }
};

// -------- NOTICES ------------
export const createNotice = async (newNotice: NoticeCreationAttributes) => {
  console.log('newNotice: ', newNotice);
  const notice = await Notice.create(newNotice);
  console.log('notice.dataValues', notice.dataValues);
  return notice.dataValues;
};

export const getNoticeByID = async (id: number) => {
  const noticeByID = await Notice.findByPk(id);
  const noticeToJSON = noticeByID?.toJSON();
  console.log(noticeToJSON);
  return noticeToJSON;
};

export const getAllNotices = async () => {
  const notices = await Notice.findAll();
  const prunedNotices = notices.map(notice => notice.dataValues);
  console.log(prunedNotices);
  // returns the current data values of the users in an array
  return prunedNotices;
};

export const updateNotice = async (notice: UpdateNoticeAttributes) => {
  console.log('notice', notice);
  try {
    const noticeToUpdate = await Notice.findByPk(notice.id);
    if (noticeToUpdate) {
      // Update each field
      noticeToUpdate.title = notice.title;
      noticeToUpdate.text = notice.text;
      noticeToUpdate.picture = notice.picture;
      // Save the new values of the notice to database
      await noticeToUpdate.save();
      // Return the updated notice
      console.log('noticeToUpdate.dataValues', noticeToUpdate.dataValues);
      return noticeToUpdate.dataValues;
    } else {
      throw new ForbiddenException(
        `Could not update the notice: There is no notice with such id as: ${notice.id}`
      );
    }
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to update the notice: ${error}`
    );
  }
};

export const getCommentsInNotice = async (noticeId: number) => {
  const notice = await Notice.findByPk(noticeId, {
    include: [
      {
        model: NoticeComment,
      },
    ],
  });
  if (notice) {
    console.log(JSON.stringify(notice, null, 2));
    return notice;
  } else {
    return Error('Notice does not exist');
  }
};

// -------- NOTICE COMMENTS ------------
export const createNoticeComment = async (
  newNoticeComment: NoticeCommentCreationAttributes
) => {
  console.log('newNoticeComment: ', newNoticeComment);
  const noticeComment = await NoticeComment.create(newNoticeComment);
  console.log('noticeComment', noticeComment);
  return noticeComment;
};

export const getNoticeCommentByID = async (id: number) => {
  const noticeCommentByID = await NoticeComment.findByPk(id);
  const noticeCommentToJSON = noticeCommentByID?.toJSON();
  console.log(noticeCommentToJSON);
  return noticeCommentToJSON;
};

export const getAllNoticeComments = async () => {
  const noticeComments = await NoticeComment.findAll();
  const prunedNoticeComments = noticeComments.map(
    noticeComment => noticeComment.dataValues
  );
  console.log(prunedNoticeComments);
  // returns the current data values of the users in an array
  return prunedNoticeComments;
};
