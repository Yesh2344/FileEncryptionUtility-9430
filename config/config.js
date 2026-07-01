import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
  FILE_ENCRYPTION_PASSWORD: process.env.FILE_ENCRYPTION_PASSWORD,
};