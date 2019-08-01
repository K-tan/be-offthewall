DROP DATABASE IF EXISTS be_offthewall_test;

CREATE DATABASE be_offthewall_test;

\c be_offthewall_test

CREATE TABLE artists(
    artist_id serial PRIMARY KEY,
    artist_username VARCHAR(255),
    social_link VARCHAR(255),
    bio TEXT
);

CREATE TABLE walls(
    wall_id serial PRIMARY KEY,
    canvas_url TEXT,
    latitude FLOAT,
    longitude FLOAT,
    street_address TEXT,
    info TEXT,
    canvas_height FLOAT,
    canvas_width FLOAT,
    trigger_height FLOAT,
    trigger_width FLOAT,
    trigger_offset_x FLOAT,
    trigger_offset_y FLOAT,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE consumers(
    consumer_id serial PRIMARY KEY,
    consumer_username VARCHAR(255),
    bio TEXT
);

CREATE TABLE images(
    image_id serial PRIMARY KEY,
    image_url TEXT,
    blurb TEXT,
    wall_id INTEGER REFERENCES walls(wall_id),
    artist_id INTEGER REFERENCES artists(artist_id),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE comments(
    comment_id serial PRIMARY KEY,
    comment_body TEXT,
    image_id INTEGER REFERENCES images(image_id),
    consumer_id INTEGER REFERENCES consumers(consumer_id),
    created_at TIMESTAMP DEFAULT NOW()
);