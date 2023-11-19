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
} from '../../src/vadePlsCode';

// --- Create the test data ---
const testNotice: NoticeCreationAttributes = {
  title: 'Favorite lift?',
  text: 'What is everyones favorite lift here?',
  userId: 1, // liftingDude
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
  await createNotice(testNoticeWraps);
}

async function testGetAllNotices() {
  await getAllNotices();
}

async function testGetNoticeById() {
  await getNoticeByID(1); // Favorite lift?
  await getNoticeByID(2); // Any bulking recipe tips?
}

async function testGetCommentsInNotice() {
  await getCommentsInNotice(1); // Favorite lift? => Romanian deadlifts have to be mine
}

async function testUpdateNotice() {
  const updateThisNotice: UpdateNoticeAttributes = {
    id: 77, // No such notice with id 77
    title: 'Looking for new lifting shoes',
    text: 'High heel and sturdy ones',
    picture: 'www.imgur.com/liftingshoes.png',
  };
  await updateNotice(updateThisNotice);
}

// ---- Run the test functions ----
//testGetAllNotices();

//testNoticeCreation();
//testGetNoticeById();
//testUpdateNoticePicture();
//testGetCommentsInNotice();
testUpdateNotice();
