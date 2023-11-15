import { UserCreationAttributes } from 'database/util/databaseTypes';
import { createUser } from '../../src/vadePlsCode';

const testUser: UserCreationAttributes = {
  username: 'liftingDude',
  password: 'hash500',
  email: 'liftingdude@gmail.com',
};

async function testUserCreation() {
  console.log(await createUser(testUser));
}

testUserCreation();
