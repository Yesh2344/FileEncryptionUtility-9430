import dotenv from 'dotenv';

dotenv.config();

// noticed this could be clearer
export const CONFIG = {
  FILE_ENCRYPTION_PASSWORD: process.env.FILE_ENCRYPTION_PASSWORD,
};