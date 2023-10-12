import dotenv from 'dotenv';
dotenv.config();

// This is quite dumb but util.ts will catch the error :D Open to improvements
export const DATABASE_URL: string =
  process.env.DATABASE_URL || 'no database URL';
export const PORT: string | number = process.env.PORT || 3001;
export const SECRET: string | undefined = process.env.SECRET;
