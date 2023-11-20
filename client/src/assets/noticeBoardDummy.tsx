import { NoticeBoard, Profile } from '../shared-types';

/** Dummy data for running the noticeboard functionalities.
 */

// dummy of  a single noticeboard
export const BasicBoard: NoticeBoard = {
  title: 'General Notices',
  description:
    'Welcome, here you are free to discuss all gym and training realted topics. Users that are logged in can post and others are able to just observe. ',
  notices: [
    {
      noticeID: '1',
      userID: '1',
      timeStamp: 1696881731877,
      title: 'Looking for gym buddy?',
      notice:
        'Hi! I am looking for a new gym buddy! I go to Otaniemi Unisport two times a week. Send me a message if you are interested!! :)',
      comments: [
        {
          noticeID: '1',
          userID: '3',
          timeStamp: 1696881731877,
          comment: 'Hi! I might be interested, how much do you lift?',
          commentID: '1-1',
        },
        {
          noticeID: '1',
          userID: '1',
          timeStamp: 1696881731877,
          comment: '100kg!',
          commentID: '1-2',
        },
      ],
    },
    {
      noticeID: '2',
      userID: '2',
      timeStamp: 1696881731877,
      title: 'Help with lifting form',
      notice:
        'Hello guys! I think I need some help with my lifting form :( Could anyone help?',
      comments: [
        {
          noticeID: '2',
          userID: '3',
          timeStamp: 1696881731877,
          comment: 'Sure! I`ll sedn u a message on Telegram :)',
          commentID: '2-1',
        },
      ],
    },
    {
      noticeID: '3',
      userID: '3',
      timeStamp: 1696881731877,
      title: 'Where to buy gym pants',
      notice:
        'Do you guys have any suggestions where I could find the best gym pants?',
      comments: [
        {
          noticeID: '3',
          userID: '1',
          timeStamp: 1696881731877,
          comment: 'I always shop pants from Lindex.',
          commentID: '3-1',
        },
        {
          noticeID: '3',
          userID: '4',
          timeStamp: 1696881731877,
          comment: 'I think Stadium has the best selection of pants',
          commentID: '3-2',
        },
      ],
    },
    {
      noticeID: '4',
      userID: '5',
      timeStamp: 1696881731877,
      title: 'Kettlebell',
      notice: 'I have an extra kettlebell, anyone interested to buy one?',
      comments: [],
    },
    {
      noticeID: '5',
      userID: '5',
      timeStamp: 1696881731877,
      title: 'Sandwitch',
      notice:
        'I found a sandwich from the gym after our weekly lifting meeting, if u are missing one -> hit me up.',
      comments: [],
    },
    {
      noticeID: '6',
      userID: '4',
      timeStamp: 1696881731877,
      title: 'Tips for powerlifting?',
      notice:
        'I have been experimenting with powerlifting lately but would need some tips on how it should be done correctly.',
      comments: [],
    },
    {
      noticeID: '7',
      userID: '3',
      timeStamp: 1696881731877,
      title: 'The best gym?',
      notice: 'Which gym do you prefer? Pros and cons?',
      comments: [],
    },
    {
      noticeID: '8',
      userID: '2',
      timeStamp: 1696881731877,
      title: 'Water bottle missing',
      notice:
        'I lost my waterbottle last sunday :( Could anyone check if it still is on our lifting corcer?',
      comments: [],
    },
    {
      noticeID: '9',
      userID: '1',
      timeStamp: 1696881731877,
      title: 'Welcome to noticeboard',
      notice: 'This is our new notice board, please use it as much u want. :)',
      comments: [],
    },
    {
      noticeID: '10',
      userID: '1',
      timeStamp: 1696881731877,
      title: 'Test',
      notice: 'test',
      comments: [],
    },
  ],
};

/* dummy dataset of profiles
      Profile-component and Noticeboard use this to search profiles from

*/
export const DummyProfiles: Array<Profile> = [
  {
    userID: '1',
    username: 'GymLover123',
    email: 'Henna.com',
    contactInfo: 'Telegram: @theGymLover123',
    favouriteLift: 'Lifting groceries',
    profilePicture: 'GymLovers`s profile pic',
  },
  {
    userID: '2',
    username: 'RockHardAbs',
    email: 'Maikki@outlook.com',
    contactInfo: 'Telegram: @theMaikki',
    profilePicture: 'Maikki`s profile pic',
  },
  {
    userID: '3',
    username: 'Kettlebell',
    email: 'Heidi.com',
    favouriteLift: 'Lifting groceries',
    profilePicture: 'Heidi`s profile pic',
  },
  {
    userID: '4',
    username: 'ICouldLiftYourMom',
    email: 'Henna.com',
    contactInfo: 'Telegram: @theBoulderLover123',
    favouriteLift: 'Lifting groceries',
  },
  {
    userID: '5',
    username: 'TheLifter99',
    email: 'Gymbro.com',
  },
];
