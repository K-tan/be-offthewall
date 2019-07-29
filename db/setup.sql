\c be_offthewall_test

DROP DATABASE IF EXISTS be_offthewall_test;

CREATE DATABASE be_offthewall_test;

CREATE TABLE artists(
    artist_id serial PRIMARY KEY,
    username VARCHAR(255),
    bio TEXT
)