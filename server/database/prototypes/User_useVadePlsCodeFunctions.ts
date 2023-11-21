import {
  UserCreationAttributes,
  UpdateUserAttributes,
} from 'database/util/databaseTypes';
import {
  createUser,
  getPartialUser,
  getUser,
  getAllUsers,
  getUsersNotices,
  getUserByUsername,
  updateUser,
  deleteUser,
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

const testUserTimppa: UserCreationAttributes = {
  username: 'TankoTimppa',
  password: 'hash800',
  email: 'tankotimppa@gmail.com',
};

async function testUserCreation() {
  //await createUser(testUser);
  //await createUser(testUserBunny);
  await createUser(testUserTimppa);
}

async function testGettingUserByEmail() {
  await getPartialUser('cardiobunny@gmail.com');
  await getPartialUser('liftingdude@hotmail.com');
}

async function testGetUser() {
  //await getUser(1);
  //await getUser(2);
  await getUser(3);
}

async function testGetAllUsers() {
  await getAllUsers();
}

async function testGetUsersNotices() {
  await getUsersNotices(1); // liftingDude => Favorite lift
  await getUsersNotices(2); // cardioBunny => Any bulking recipe tips?
  await getUsersNotices(100); // Should return an error
}

async function testGetUserByUsername() {
  await getUserByUsername('liftingDude');
  await getUserByUsername('cardioBunny');
  //await getUserByUsername('not_real_user');
}

async function testUpdateUser() {
  const updateThisUser: UpdateUserAttributes = {
    // Should result in an error
    id: 100,
    profilePicture: 'www.imgur.com/TankoTimppa.jpeg',
    typeOfLifting: 'Powerlifting',
    favouriteLift: 'squat',
    favouriteGym: 'Unisport Otaniemi',
    favouriteGymTime: 'Saturdays 13',
    contactInfo: 'TG: @TankoTimppa',
  };

  await updateUser(updateThisUser);
}

async function testDeleteUser() {
  await deleteUser(1);
}

// ---- Run the test functions ----
//testGetAllUsers();

//testUserCreation();
//testGettingUserByEmail();
//testGetUser();
//testUpdatingEmail();
//testUpdatingProfilePicture();
//testGetUsersNotices();
//testGetUserByUsername();
//testUpdateUser();
testDeleteUser();
