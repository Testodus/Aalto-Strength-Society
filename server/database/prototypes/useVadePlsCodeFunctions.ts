import { UserCreationAttributes } from 'database/util/databaseTypes';
import { createUser } from '../../src/vadePlsCode';

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

async function testUserCreation() {
  //console.log(await createUser(testUser));
  console.log(await createUser(testUserBunny));
}

testUserCreation();
