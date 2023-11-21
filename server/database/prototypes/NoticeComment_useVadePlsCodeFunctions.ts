import { NoticeCommentCreationAttributes } from 'database/util/databaseTypes';
import {
  createNotice,
  createNoticeComment,
  getAllNoticeComments,
  getNoticeCommentByID,
  updateNotice,
  deleteNoticeComment,
} from '../../src/vadePlsCode';

// --- Create the test data ---
const testNoticeComment: NoticeCommentCreationAttributes = {
  text: 'I also like carrots',
  userId: 1,
  noticeId: 2, // Any bulking recipe tips?
};

const testNoticeCommentLift: NoticeCommentCreationAttributes = {
  text: 'Romanian deadlifts have to be mine',
  userId: 2, // cardioBunny
  noticeId: 1, // Favorite lift?
};

const testNoticeCommentLift2: NoticeCommentCreationAttributes = {
  text: 'Kipping pull ups are the best!',
  userId: 3, // crossFitGal
  noticeId: 1, // Favorite lift?
};

// --- Define the wrapper test functions (cant run top level await)
async function testNoticeCommentCreation() {
  await createNoticeComment(testNoticeComment);
}

async function testGetAllNoticeComments() {
  await getAllNoticeComments();
}

async function testGetNoticeCommentByID() {
  await getNoticeCommentByID(3); // I love chili con carne at least!
  await getNoticeCommentByID(4); // Romanian deadlifts have be mine
  await getNoticeCommentByID(200); // Romanian deadlifts have be mine
}

async function testDeleteNoticeComment() {
  await deleteNoticeComment(300);
}

// ---- Run the test functions ----
//testGetAllNoticeComments();

testNoticeCommentCreation();
//testGetNoticeCommentByID();
//testDeleteNoticeComment();
