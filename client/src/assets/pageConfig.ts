import { PageInfo } from '../types';

// This is a dummydata file for storing page information (fast solution to create many pages). But I assume we will be coding the content statically so this will be removed most likely
export const PageConfig: Array<PageInfo> = [
  {
    name: 'HomePage',
    title: 'What is ASS',
    textContent: [
      'Welcome to ass-page we are the strongest society here',
      'backoff',
      'ooga booga',
    ],
  },
  {
    name: 'board',
    title: 'Board 2023',
    textContent: ['This is the about page.', 'Welcome', 'ASS is strong'],
  },
  {
    name: 'rules',
    title: 'Rules',
    textContent: ['Our association has rules, here is link to them:'],
  },
  {
    name: 'harassment',
    title: 'Harassment situations',
    textContent: ['Our association has rules, please follow them'],
  },
  {
    name: 'join',
    title: 'How to join ASS?',
    textContent: ['You can join ass from here:'],
  },
];
