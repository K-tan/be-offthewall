const jwt = require("jsonwebtoken");
const { KEY } = process.env;

exports.getUser = token => {
  try {
    if (token) {
      return jwt.verify(token, KEY);
    }
    return null;
  } catch (error) {
    return null;
  }
};
