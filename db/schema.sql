DROP DATABASE IF EXISTS candy_dev;

CREATE DATABASE candy_dev;

\c candy_dev;

CREATE TABLE candy(
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
type TEXT NOT NULL,
cost INT NOT NULL,
isFavorite BOOLEAN

);