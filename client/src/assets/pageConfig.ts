import { PageInfo } from '../shared-types';

// This is a dummydata file for storing page information (fast solution to create many pages). But I assume we will be coding the content statically so this will be removed most likely
export const PageConfig: Array<PageInfo> = [
  {
    name: 'in',
    title: 'Logged in',
    textContent: ['You have succesfully logged in.'],
  },
  {
    name: 'out',
    title: 'Logged out',
    textContent: ['You have succesfully logged out.'],
  },
];
