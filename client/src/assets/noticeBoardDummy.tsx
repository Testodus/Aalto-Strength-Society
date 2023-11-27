import { NoticeBoard, Profile } from '../shared-types';

/** Dummy data for running the noticeboard functionalities.
 */

/* dummy dataset of profiles
      Profile-component and Noticeboard use this to search profiles from

*/
export const DummyProfiles: Array<Profile> = [
  {
    userID: 1,
    username: 'GymLover123',
    email: 'Henna.com',
    contactInfo: 'Telegram: @theGymLover123',
    favouriteLift: 'Lifting groceries',
    profilePicture: 'GymLovers`s profile pic',
  },
  {
    userID: 2,
    username: 'RockHardAbs',
    email: 'Maikki@outlook.com',
    contactInfo: 'Telegram: @theMaikki',
    profilePicture: 'Maikki`s profile pic',
  },
  {
    userID: 3,
    username: 'Kettlebell',
    email: 'Heidi.com',
    favouriteLift: 'Lifting groceries',
    profilePicture: 'Heidi`s profile pic',
  },
  {
    userID: 4,
    username: 'ICouldLiftYourMom',
    email: 'Henna.com',
    contactInfo: 'Telegram: @theBoulderLover123',
    favouriteLift: 'Lifting groceries',
  },
  {
    userID: 5,
    username: 'TheLifter99',
    email: 'Gymbro.com',
  },
  {
    userID: 25,
    username: 'moi',
    email: 'moi@moi.fi',
    contactInfo: 'Telegram: @theGymLover123',
    favouriteLift: 'Lifting groceries',
    profilePicture: 'GymLovers`s profile pic',
  },
];
