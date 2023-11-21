import { User, Notice, NoticeComment } from '../database/model/index';
import {
  NoticeAttributes,
  NoticeCreationAttributes,
  UserAttributes,
  UserCreationAttributes,
  NoticeCommentAttributes,
  NoticeCommentCreationAttributes,
} from 'database/util/databaseTypes';
import {
  ForbiddenException,
  InternalServerErrorException,
} from '@nestjs/common';

// ---------- USER --------------
export const createUser = async (newUser: UserCreationAttributes) => {
  try {
    const newUserInDB: UserAttributes = await User.create(newUser);
    const createdUser = {
      userID: newUserInDB.id,
      email: newUserInDB.email,
    };
    return createdUser;
  } catch (error) {
    throw new ForbiddenException('Validation error from database! :(');
  }
};

// Based on email, returns: email, password, userID
export const getPartialUser = async (email: string) => {
  const userByEmail = await User.findOne({
    where: {
      email: email,
    },
  });

  if (userByEmail) {
    const partialUser = {
      email: userByEmail.email,
      userID: userByEmail.id,
      password: userByEmail.password,
    };
    return partialUser;
  } else {
    throw new InternalServerErrorException('User data missing from database.');
  }
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
    // Return the updated user
    return user;
  } else {
    return Error('User does not exist, cant update profile picture');
  }
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

// -------- NOTICES ------------
export const createNotice = async (newNotice: NoticeCreationAttributes) => {
  console.log('newNotice: ', newNotice);
  const notice = await Notice.create(newNotice);
  console.log('notice', notice);
  return notice;
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

// Change or add a picture to the notice
// (Not sure if this is needed but its here. Can be made one for changing the text)
export const updateNoticePicture = async (id: number, newPicture: string) => {
  const notice = await Notice.findByPk(id);
  if (notice) {
    console.log('old picture: ', notice.picture);
    notice.picture = newPicture;
    await notice.save();
    console.log('new picture: ', notice.picture);
    // Return the updated notice
    return notice;
  } else {
    return Error('Notice does not exist, cant update picture');
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
