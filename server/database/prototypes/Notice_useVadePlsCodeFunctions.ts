import { NoticeCreationAttributes } from 'database/util/databaseTypes';
import {
  createNotice,
  getAllNotices,
  getNoticeByID,
  updateNoticePicture,
  getCommentsInNotice,
} from '../../src/vadePlsCode';

// --- Create the test data ---
const testNotice: NoticeCreationAttributes = {
  title: 'Favorite lift?',
  text: 'What is everyones favorite lift here?',
  userId: 1, // liftingDude
};

const testNoticeFood: NoticeCreationAttributes = {
  title: 'Any bulking recipe tips?',
  text: 'Month 2 atm and need some new ones',
  userId: 2, // cardioBunny
};

// --- Define the wrapper test functions (cant run top level await)
async function testNoticeCreation() {
  //await createNotice(testNotice);
  await createNotice(testNoticeFood);
}

async function testGetAllNotices() {
  await getAllNotices();
}

async function testGetNoticeById() {
  await getNoticeByID(1); // Favorite lift?
  await getNoticeByID(2); // Any bulking recipe tips?
}

async function testUpdateNoticePicture() {
  await updateNoticePicture(1, 'www.imgur.com/coolLift.png'); // Favorite lift?
}

async function testGetCommentsInNotice() {
  await getCommentsInNotice(1); // Favorite lift? => Romanian deadlifts have to be mine
}

// ---- Run the test functions ----
//testGetAllNotices();

//testNoticeCreation();
//testGetNoticeById();
//testUpdateNoticePicture();
testGetCommentsInNotice();
