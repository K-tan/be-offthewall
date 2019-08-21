const passwords = require('../../credentials');
const artistsData = [
  passwords.bobbirae && {
    artist_username: "bobbirae",
    artist_password: passwords.bobbirae,
    social_facebook: null,
    social_instagram: "https://www.instagram.com/bearcubs/",
    social_twitter: "https://twitter.com/bobbiraecouk",
    social_website: "https://bobbirae.co.uk",
    bio: null
  },
  passwords.mikitillett && {
    artist_username: "mikitillett",
    artist_password: passwords.mikitillett,
    social_facebook: null,
    social_instagram: null,
    social_twitter: null,
    social_website: null,
    bio: "Nature lover and all-round sleepy person."
  }
];

module.exports = artistsData.filter(e => e);
