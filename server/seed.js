import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_CONNECTION });
// KEY inside .env
// postgresql://postgres.quysmmwmiipxrjnzgbkv:bNqsj92Mn3ODkqEf@aws-0-eu-west-2.pooler.supabase.com:6543/postgres

// create the table
db.query(`
CREATE TABLE IF NOT EXISTS entries (
    id SERIAL PRIMARY KEY,
    username TEXT,
    message TEXT
);
  
INSERT INTO entries (username, message) VALUES
('Mr. Michaels', 'This sure is a swell place!');`);
