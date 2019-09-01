const passwords = require('../../credentials');
const artistsData = [
  passwords.vinnie_van_G && {
    artist_username: "vinnie_van_G",
    artist_password: passwords.vinnie_van_G,
    social_facebook: "facebook.com/vvg",
    social_instagram: "instagram.com/vvg",
    social_twitter: "twitter.com/vvg",
    social_website: "daffodilsandears.co.uk",
    bio: "look it up"
  },
  passwords.monet && {
    artist_username: "monet",
    artist_password: passwords.monet,
    social_facebook: "facebook.com/monet",
    social_instagram: "instagram.com/monet",
    social_twitter: "twitter.com/monet",
    social_website: "specsavers.co.uk",
    bio: "show me the monet"
  }
];

module.exports = artistsData.filter(e => e);
