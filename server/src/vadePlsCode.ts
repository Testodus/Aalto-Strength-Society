type createUser = {
  userName: string;
  password: string;
  email: string;
  profilePicture: string | undefined;
  typeOfLifting: string | undefined;
  favouriteLift: string | undefined;
  favouriteGym: string | undefined;
  favouriteGymTime: string | undefined;
  contactInfo: string | undefined;
};

// Creates new user, returns id & email
export const createUser = (newUser: createUser) => {
  // Takes userObject as input
  // Creaters user in database. Crerates id for user.
  // Returns userObject with fields: id, email
  console.log(newUser);
  const createdUser = {
    userID: 239048239058,
    email: 'rockHardCalves@gmail.com',
  };
  return createdUser;
};

// Based on email, returns: email, password, userID
export const getPartialUser = (email: string) => {
  return {
    email: 'muscleMania@gmail.com',
    userID: 123456,
    password: '$2b$10$0qXy7foXCf1KW5qw63nI2.mgAti0CPfHQaxz4Ksn7yn3BjgZ/G2um',
  };
};

export const getUser = () => {};
