import { NoticeBoard, Profile } from '../types';

/** Dummy data for running the noticeboard functionalities.
 */

// dummy of  a single noticeboard
export const BasicBoard: NoticeBoard = {
  title: 'First Noticeboard',
  notices: [
    {
      noticeID: '1',
      userID: '1',
      timeStamp: 1696881731877,
      title: 'Moikka',
      notice: 'I have a crush on someone...',
    },
    {
      noticeID: '2',
      userID: '2',
      timeStamp: 1696881731877,
      title: 'Juu',
      notice: 'Me too!!',
    },
    {
      noticeID: '3',
      userID: '3',
      timeStamp: 1696881731877,
      title: 'Heh',
      notice:
        'I would like to tell you something!! this is the best association i have ever been a member in. This is great, keep going..',
    },
    {
      noticeID: '4',
      userID: '5',
      timeStamp: 1696881731877,
      title: 'Kettlebell',
      notice:
        'This should be a longer text too, I do not know what to write but I write anyways. Have a nice day.',
    },
    {
      noticeID: '5',
      userID: '5',
      timeStamp: 1696881731877,
      title: 'Snadwitch',
      notice:
        'Today I ate only a one sandwitch. It was not enough for my big muscles.',
    },
    {
      noticeID: '6',
      userID: '4',
      timeStamp: 1696881731877,
      title: 'Writing',
      notice:
        'Writing these notices is not easy,you should try too. It required quite a lot of skill.',
    },
    {
      noticeID: '7',
      userID: '3',
      timeStamp: 1696881731877,
      title: 'noticed',
      notice: 'I need 10 notices',
    },
    {
      noticeID: '8',
      userID: '2',
      timeStamp: 1696881731877,
      title: 'TBH',
      notice: 'To be honest writing is not that bad, this will be great',
    },
    {
      noticeID: '9',
      userID: '1',
      timeStamp: 1696881731877,
      title: 'Finally',
      notice: 'This is the last notice good bye',
    },
    {
      noticeID: '10',
      userID: '1',
      timeStamp: 1696881731877,
      title: 'Finally',
      notice: 'This is the last notice good bye',
    },
  ],
};

/* dummy dataset of profiles
      Profile-component and Noticeboard use this to search profiles from

*/
export const DummyProfiles: Array<Profile> = [
  {
    userID: '1',
    username: 'Henna',
    email: 'Henna.com',
    contactInformation: 'Telegram: @theGymLover123',
    favoriteLift: 'Lifting groceries',
    profilePictureSrc: 'Henna`s profile pic',
  },
  {
    userID: '2',
    username: 'Maikki',
    email: 'Maikki@outlook.com',
    contactInformation: 'Telegram: @theMaikki',
    profilePictureSrc: 'Maikki`s profile pic',
  },
  {
    userID: '3',
    username: 'Heidi',
    email: 'Heidi.com',
    favoriteLift: 'Lifting groceries',
    profilePictureSrc: 'Heidi`s profile pic',
  },
  {
    userID: '4',
    username: 'Jenski',
    email: 'Henna.com',
    contactInformation: 'Telegram: @theBoulderLover123',
    favoriteLift: 'Lifting groceries',
  },
  {
    userID: '5',
    username: 'Gym bro',
    email: 'Gymbro.com',
  },
];
