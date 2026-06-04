import { config } from "dotenv";

config({ path: '.env' });

export const {
    PORT,
    NODE_ENV
} = process.env;