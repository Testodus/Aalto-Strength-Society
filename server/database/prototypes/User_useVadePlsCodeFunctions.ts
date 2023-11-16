import { UserCreationAttributes } from 'database/util/databaseTypes';
import {
  createUser,
  getPartialUser,
  getUser,
  getAllUsers,
  updateUserEmail,
  updateUserPicture,
} from '../../src/vadePlsCode';

const testUser: UserCreationAttributes = {
  username: 'liftingDude',
  password: 'hash500',
  email: 'liftingdude@gmail.com',
};

const testUserBunny: UserCreationAttributes = {
  username: 'cardioBunny',
  password: 'hash600',
  email: 'cardiobunny@gmail.com',
};

const testUserAllDetails: UserCreationAttributes = {
  username: 'crossFitGal',
  password: 'hash700',
  email: 'crossfitgal@gmail.com',
  profilePicture: 'www.picturehub.com/profilepicture.png',
  typeOfLifting: 'Crossfit / Bodybuilding',
  favouriteLift: 'Pull ups',
  favouriteGym: 'Unisport Kluuvi',
  favouriteGymTime: 'Tuesdays at 18 and Thursdays at 19',
  contactInfo: 'Telegram: @crossfitgal',
};

async function testUserCreation() {
  //await createUser(testUser);
  //await createUser(testUserBunny);
  await createUser(testUserAllDetails);
}

async function testGettingUserByEmail() {
  await getPartialUser('cardiobunny@gmail.com');
  await getPartialUser('liftingdude@gmail.com');
}

async function testGetUser() {
  //await getUser(1);
  //await getUser(2);
  await getUser(3);
}

async function testGetAllUsers() {
  await getAllUsers();
}

async function testUpdatingEmail() {
  await updateUserEmail(1, 'liftingdude@hotmail.com');
}

async function testUpdatingProfilePicture() {
  await updateUserPicture(2, 'www.imgur.com/cardiobunny.jpeg');
}

// ---- Run the test functions ----
testGetAllUsers();

//testUserCreation();
//testGettingUserByEmail();
//testGetUser();
//testUpdatingEmail();
//testUpdatingProfilePicture();
