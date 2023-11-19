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

async function testGetUsersNotices() {
  await getUsersNotices(1); // liftingDude => Favorite lift
  await getUsersNotices(2); // cardioBunny => Any bulking recipe tips?
}

async function testGetUserByUsername() {
  await getUserByUsername('liftingDude');
  await getUserByUsername('cardioBunny');
}

async function testUpdateUser() {
  const updateThisUser: UpdateUserAttributes = {
    // jollellel
    id: 15,
    profilePicture: 'www.imgur.com/jollellel.jpeg',
    typeOfLifting: 'Bodybuilding',
    favouriteLift: 'Pec deck',
    favouriteGym: 'Unisport meilahti',
    favouriteGymTime: 'Mondays 18',
    contactInfo: 'TG: @jollellel',
  };

  await updateUser(updateThisUser);
}

async function testDeleteUser() {
  await deleteUser(55); // No such user with id 55
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
testUpdateUser();
//testDeleteUser();
