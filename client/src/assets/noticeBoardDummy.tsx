import { NoticeBoard, Profile } from '../types';

export const BasicBoard: NoticeBoard = {
  title: 'First Noticeboard',
  notices: [
    {
      userID: '1',
      timeStamp: 1696881731877,
      title: 'Moikka',
      notice: 'I have a crush on someone...',
    },
    {
      userID: '2',
      timeStamp: 1696881731877,
      title: 'Juu',
      notice: 'Me too!!',
    },
    {
      userID: '3',
      timeStamp: 1696881731877,
      title: 'Heh',
      notice:
        'I would like to tell you something!! this is the best association i have ever been a member in. This is great, keep going..',
    },
    {
      userID: '5',
      timeStamp: 1696881731877,
      title: 'Kettlebell',
      notice:
        'This should be a longer text too, I do not know what to write but I write anyways. Have a nice day.',
    },
    {
      userID: '5',
      timeStamp: 1696881731877,
      title: 'Snadwitch',
      notice:
        'Today I ate only a one sandwitch. It was not enough for my big muscles.',
    },
    {
      userID: '4',
      timeStamp: 1696881731877,
      title: 'Writing',
      notice:
        'Writing these notices is not easy,you should try too. It required quite a lot of skill.',
    },
    {
      userID: '3',
      timeStamp: 1696881731877,
      title: 'noticed',
      notice: 'I need 10 notices',
    },
    {
      userID: '2',
      timeStamp: 1696881731877,
      title: 'TBH',
      notice: 'To be honest writing is not that bad, this will be great',
    },
    {
      userID: '1',
      timeStamp: 1696881731877,
      title: 'Finally',
      notice: 'This is the last notice good bye',
    },
    {
      userID: '1',
      timeStamp: 1696881731877,
      title: 'Finally',
      notice: 'This is the last notice good bye',
    },
  ],
};

export const DummyProfiles: Array<Profile> = [
  {
    userID: '1',
    username: 'Henna',
  },
  {
    userID: '2',
    username: 'Maikki',
  },
  {
    userID: '3',
    username: 'Heidi',
  },
  {
    userID: '4',
    username: 'Jenski',
  },
  {
    userID: '5',
    username: 'Gym bro',
  },
];

export const getProfile = (userID: string) => {
  const profile = DummyProfiles.find(profile => profile.userID === userID);
  return profile ? profile : null;
};
