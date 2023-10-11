import { NoticeBoard, Profile } from '../types';

export const BasicBoard: NoticeBoard = {
  title: 'First Noticeboard',
  notes: [
    {
      userID: '1',
      timeStamp: 1696881731877,
      title: 'Moikka',
      note: 'I have a crush on someone...',
    },
    {
      userID: '2',
      timeStamp: 1696881731877,
      title: 'Juu',
      note: 'Me too!!',
    },
    {
      userID: '3',
      timeStamp: 1696881731877,
      title: 'Heh',
      note: 'I would like to tell you something!! this is the best association i have ever been a member in. This is great, keep going..',
    },
    {
      userID: '5',
      timeStamp: 1696881731877,
      title: 'Kettlebell',
      note: 'This should be a longer text too, I do not know what to write but I write anyways. Have a nice day.',
    },
    {
      userID: '5',
      timeStamp: 1696881731877,
      title: 'Snadwitch',
      note: 'Today I ate only a one sandwitch. It was not enough for my big muscles.',
    },
    {
      userID: '4',
      timeStamp: 1696881731877,
      title: 'Writing',
      note: 'Writing these notes is not easy,you should try too. It required quite a lot of skill.',
    },
    {
      userID: '3',
      timeStamp: 1696881731877,
      title: 'Noted',
      note: 'I need 10 notes',
    },
    {
      userID: '2',
      timeStamp: 1696881731877,
      title: 'TBH',
      note: 'To be honest writing is not that bad, this will be great',
    },
    {
      userID: '1',
      timeStamp: 1696881731877,
      title: 'Finally',
      note: 'This is the last note good bye',
    },
    {
      userID: '1',
      timeStamp: 1696881731877,
      title: 'Finally',
      note: 'This is the last note good bye',
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
