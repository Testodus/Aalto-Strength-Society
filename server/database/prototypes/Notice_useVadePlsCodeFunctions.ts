import { NoticeCreationAttributes } from 'database/util/databaseTypes';
import { createNotice, getAllNotices } from '../../src/vadePlsCode';

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

// ---- Run the test functions ----
//testNoticeCreation();
testGetAllNotices();
