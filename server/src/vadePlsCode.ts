import {
  ForbiddenException,
  InternalServerErrorException,
} from '@nestjs/common';

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
export const createUser = async (newUser: UserCreationAttributes) => {
  try {
    const newUserInDB: UserAttributes = await User.create(newUser);
    const createdUser = {
      userID: newUserInDB.id,
      email: newUserInDB.email,
    };
    return createdUser;
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to create a new user: ${error}`
    );
  }
};

// Based on email, returns: email, password, userID
export const getPartialUser = async (email: string) => {
  try {
    const userByEmail = await User.findOne({
      where: {
        email: email,
      },
    });
    if (userByEmail) {
      const partialUser = {
        email: userByEmail?.email,
        userID: userByEmail?.id,
        password: userByEmail?.password,
      };
      console.log('partialUser', partialUser);
      return partialUser;
    } else {
      throw new ForbiddenException(`There is no user with the email: ${email}`);
    }
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to get partial user by email ${error}`
    );
  }
};

// Gets user by ID and returns all the details of the user except password.
export const getUser = async (id: number) => {
  try {
    const userByID = await User.findByPk(id);
    if (userByID) {
      return {
        email: userByID?.email,
        userID: userByID?.id,
        username: userByID?.username,
        profilePicture: userByID?.profilePicture,
        typeOfLifting: userByID?.typeOfLifting,
        favouriteLift: userByID?.favouriteLift,
        favouriteGym: userByID?.favouriteGym,
        favouriteGymTime: userByID?.favouriteGymTime,
        contactInfo: userByID?.contactInfo,
      };
    } else {
      throw new ForbiddenException(`There is no user with the id: ${id}`);
    }
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to getUser with id: ${error}`
    );
  }
};

// Gets user by username
export const getUserByUsername = async (username: string) => {
  try {
    const userByUsername = await User.findOne({
      where: {
        username: username,
      },
    });
    if (userByUsername) {
      console.log('userByUsername.dataValues', userByUsername.dataValues);
      return userByUsername.dataValues;
    } else {
      throw new ForbiddenException(
        `There is no user with the username: ${username}`
      );
    }
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to get user by username: ${error}`
    );
  }
};

// Gets all users and their full details
export const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    //const prunedUsers = users.map(user => user.dataValues);
    const prunedUsers = users.map(user => {
      return {
        email: user.email,
        userID: user.id,
        username: user.username,
        profilePicture: user.profilePicture,
        typeOfLifting: user.typeOfLifting,
        favouriteLift: user.favouriteLift,
        favouriteGym: user.favouriteGym,
        favouriteGymTime: user.favouriteGymTime,
        contactInfo: user.contactInfo,
      };
    });
    console.log(prunedUsers);
    // returns the current data values of the users in an array
    return prunedUsers;
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to get all users ${error}`
    );
  }
};

// Returns the user object and the notices she/he has posted
export const getUsersNotices = async (userId: number) => {
  try {
    const user = await User.findByPk(userId, {
      include: [
        {
          model: Notice,
        },
      ],
    });
    if (user) {
      console.log('user.dataValues', user.dataValues);
      console.log('In a prettier JSON format', JSON.stringify(user, null, 2));
      return user.dataValues;
    } else {
      throw new ForbiddenException(`There is no user with such id: ${userId}`);
    }
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to get the users notices: ${error}`
    );
  }
};

export const updateUser = async (user: UpdateUserAttributes) => {
  console.log('user', user);
  try {
    const userToUpdate = await User.findByPk(user.id);
    if (userToUpdate) {
      // Update each field
      userToUpdate.profilePicture = user.profilePicture
        ? user.profilePicture
        : userToUpdate.profilePicture;
      userToUpdate.typeOfLifting = user.typeOfLifting
        ? user.typeOfLifting
        : userToUpdate.typeOfLifting;
      userToUpdate.favouriteLift = user.favouriteLift
        ? user.favouriteLift
        : userToUpdate.favouriteLift;
      userToUpdate.favouriteGym = user.favouriteGym
        ? user.favouriteGym
        : userToUpdate.favouriteGym;
      userToUpdate.favouriteGymTime = user.favouriteGymTime
        ? user.favouriteGymTime
        : userToUpdate.favouriteGymTime;
      userToUpdate.contactInfo = user.contactInfo
        ? user.contactInfo
        : userToUpdate.contactInfo;
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
  try {
    const notice = await Notice.create(newNotice);
    console.log('notice.dataValues', notice.dataValues);
    return notice.dataValues;
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to create a new notice: ${error}`
    );
  }
};

export const getNoticeByID = async (id: number) => {
  try {
    const noticeByID = await Notice.findByPk(id);
    if (noticeByID) {
      console.log('noticeByID.dataValues', noticeByID.dataValues);
      return noticeByID.dataValues;
    } else {
      throw new ForbiddenException(`There is no notice with such id: ${id}`);
    }
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to get notice by ID; ${error}`
    );
  }
};

export const getAllNotices = async () => {
  try {
    const notices = await Notice.findAll();
    const prunedNotices = notices.map(notice => notice.dataValues);
    console.log(prunedNotices);
    // returns the current data values of the users in an array
    return prunedNotices;
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to get all notices: ${error}`
    );
  }
};

export const updateNotice = async (notice: UpdateNoticeAttributes) => {
  console.log('notice', notice);
  try {
    const noticeToUpdate = await Notice.findByPk(notice.id);

    console.log(noticeToUpdate);
    if (noticeToUpdate) {
      // Update each field and check for possible null values given
      noticeToUpdate.title = notice.title ? notice.title : noticeToUpdate.title;
      noticeToUpdate.text = notice.text ? notice.text : noticeToUpdate.text;
      noticeToUpdate.picture = notice.picture
        ? notice.picture
        : noticeToUpdate.picture;
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

export const deleteNotice = async (noticeId: number) => {
  try {
    const noticeToDelete = await Notice.findByPk(noticeId);
    console.log('noticeToDelete', noticeToDelete);
    if (noticeToDelete) {
      await noticeToDelete.destroy();
    } else {
      throw new ForbiddenException(
        `Could not delete the notice: There is no notice with such id as: ${noticeId}`
      );
    }
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to delete the notice: ${error}`
    );
  }
};

export const getCommentsInNotice = async (noticeId: number) => {
  try {
    const notice = await Notice.findByPk(noticeId, {
      include: [
        {
          model: NoticeComment,
        },
      ],
    });
    if (notice) {
      console.log(
        'notice in a prettier format',
        JSON.stringify(notice, null, 2)
      );
      console.log('notice.dataValues', notice.dataValues);
      return notice.dataValues;
    } else {
      throw new ForbiddenException(
        `Could not get comments in notice. There is no notice with the id: ${noticeId}`
      );
    }
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to get comments in notice: ${error}`
    );
  }
};

// -------- NOTICE COMMENTS ------------
export const createNoticeComment = async (
  newNoticeComment: NoticeCommentCreationAttributes
) => {
  console.log('newNoticeComment: ', newNoticeComment);
  try {
    const noticeComment = await NoticeComment.create(newNoticeComment);
    console.log('noticeComment.dataValues', noticeComment.dataValues);
    return noticeComment.dataValues;
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to create a new notice comment ${error}`
    );
  }
};

export const getNoticeCommentByID = async (id: number) => {
  try {
    console.log('------------------');
    const noticeCommentByID = await NoticeComment.findByPk(id);
    console.log('------------------');

    if (noticeCommentByID) {
      console.log('noticeCommentByID.dataValues', noticeCommentByID.dataValues);
      return noticeCommentByID.dataValues;
    } else {
      throw new ForbiddenException(
        `Could not delete the notice comment. There is no notice comment with such id as: ${id}`
      );
    }
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to get a notice comment by id ${error}`
    );
  }
};

export const getAllNoticeComments = async () => {
  try {
    const noticeComments = await NoticeComment.findAll();
    const prunedNoticeComments = noticeComments.map(
      noticeComment => noticeComment.dataValues
    );
    console.log(prunedNoticeComments);
    // returns the current data values of the users in an array
    return prunedNoticeComments;
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to get all notice comments ${error}`
    );
  }
};

export const deleteNoticeComment = async (noticeCommentId: number) => {
  try {
    const noticeCommentToDelete = await NoticeComment.findByPk(noticeCommentId);
    console.log('noticeCommentToDelete', noticeCommentToDelete);
    if (noticeCommentToDelete) {
      await noticeCommentToDelete.destroy();
    } else {
      throw new ForbiddenException(
        `Could not delete the notice comment: There is no notice comment with such id as: ${noticeCommentId}`
      );
    }
  } catch (error) {
    throw new ForbiddenException(
      `Something went wrong when trying to delete the notice comment: ${error}`
    );
  }
};
