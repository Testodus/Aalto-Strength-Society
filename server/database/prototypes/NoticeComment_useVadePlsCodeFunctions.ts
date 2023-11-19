import { NoticeCommentCreationAttributes } from 'database/util/databaseTypes';
import {
  createNotice,
  createNoticeComment,
  getAllNoticeComments,
  getNoticeCommentByID,
  updateNotice,
} from '../../src/vadePlsCode';

// --- Create the test data ---
const testNoticeComment: NoticeCommentCreationAttributes = {
  text: 'I love chili con carne at least!',
  userId: 1, // liftingDude
  noticeId: 2, // Any bulking recipe tips?
};

const testNoticeCommentLift: NoticeCommentCreationAttributes = {
  text: 'Romanian deadlifts have to be mine',
  userId: 2, // cardioBunny
  noticeId: 1, // Favorite lift?
};

// --- Define the wrapper test functions (cant run top level await)
async function testNoticeCommentCreation() {
  //await createNoticeComment(testNoticeComment);
  await createNoticeComment(testNoticeCommentLift);
}

async function testGetAllNoticeComments() {
  await getAllNoticeComments();
}

async function testGetNoticeCommentByID() {
  await getNoticeCommentByID(3); // I love chili con carne at least!
  await getNoticeCommentByID(4); // Romanian deadlifts have be mine
}

// ---- Run the test functions ----
//testGetAllNoticeComments();

//testNoticeCommentCreation();
testGetNoticeCommentByID();
