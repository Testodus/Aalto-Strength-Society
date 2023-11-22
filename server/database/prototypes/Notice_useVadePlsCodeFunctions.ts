import {
  NoticeCreationAttributes,
  UpdateNoticeAttributes,
} from 'database/util/databaseTypes';
import {
  createNotice,
  getAllNotices,
  getNoticeByID,
  getCommentsInNotice,
  updateNotice,
  deleteNotice,
} from '../../src/vadePlsCode';

// --- Create the test data ---
const testNotice: NoticeCreationAttributes = {
  title: 'Muscles',
  text: 'More muscles, testing same title names :)',
  userId: 3, // crossfitgal
};

const testNoticeCrossFitGal: NoticeCreationAttributes = {
  title: 'Does anyone here do crossfit',
  text: 'It is my preferred lifting form, but does everyone here just powerlift?',
  userId: 3, // crossFitGal
};

const testNoticeWraps: NoticeCreationAttributes = {
  title: 'Looking for new lifting wraps',
  text: 'Preferrably under 20 euros and comfy',
  userId: 3, // crossFitGal
};

const testNoticeCurl: NoticeCreationAttributes = {
  title: 'What curl variation for bicep peaks?',
  text: 'See title. What would be the best curl variation for that',
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
  //await createNotice(testNoticeFood);
  //await createNotice(testNoticeCrossFitGal);
  await createNotice(testNotice);
}

async function testGetAllNotices() {
  await getAllNotices();
}

async function testGetNoticeById() {
  await getNoticeByID(1); // Favorite lift?
  await getNoticeByID(2); // Any bulking recipe tips?
  await getNoticeByID(200);
}

async function testGetCommentsInNotice() {
  await getCommentsInNotice(200); // Favorite lift? => Romanian deadlifts have to be mine
}

async function testUpdateNotice() {
  const updateThisNotice: UpdateNoticeAttributes = {
    id: 23,
    text: 'Cool text',
    picture: 'www.imgur.com/barefoot.png',
  };
  await updateNotice(updateThisNotice);
}

async function testDeleteNotice() {
  await deleteNotice(1);
}

// ---- Run the test functions ----
//testGetAllNotices();

//testNoticeCreation();
//testGetNoticeById();
//testUpdateNoticePicture();
//testGetCommentsInNotice();
testUpdateNotice();
//testDeleteNotice();
