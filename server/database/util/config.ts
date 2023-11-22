/*// This file offers the value for the database url
import dotenv from 'dotenv';
// config() function loads the DATABASE_URL value from .env file to process.env
// This is to prevent setting process.env values every time to terminal sessions
dotenv.config({ path: '../../.env' });

// This is quite dumb but util.ts will catch the error :D Open to improvements
export const DATABASE_URL: string =
  process.env.DATABASE_URL || 'no database URL';*/
