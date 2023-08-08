DROP DATABASE IF EXISTS games_dev;
CREATE DATABASE games_dev;

\c games_dev;
DROP TABLE IF EXISTS games;

CREATE TABLE games (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 players TEXT,
 category TEXT,
 cards_required BOOLEAN,
 instructions TEXT
);
