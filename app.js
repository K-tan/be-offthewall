const express = require("express");
const expressGraphQL = require("express-graphql");
const jwt = require("express-jwt");
const { schema, root } = require("./schema/schema");
const { KEY } = process.env;

const something = (req, res, next) => {
  console.log(req.user);
  next();
};

// app.get("/", jwt({ secret: KEY }), (req, res) => {
//   console.log(Object.keys(res));
//   if (!req.user.admin) return res.sendStatus(401);
//   res.sendStatus(200);
// });

const signToken = str => {
  return new Promise(resolve => {
    resolve(jwt.sign({ apiKey: str }, KEY));
  });
};

const verifyJwt = req => {
  let token;
  if (req.query && req.query.hasOwnProperty("access_token")) {
    token = req.query.access_token;
  } else if (
    req.headers.authorization &&
    req.headers.authorization.includes("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  return new Promise((resolve, reject) => {
    jwt.verify(token, KEY, (error, decoded) => {
      if (error) reject("401: user is not authenticated");
      resolve(decoded);
    });
  });
};

const app = express();
app.use(something);
app.use(
  "/",
  expressGraphQL({
    schema,
    rootValue: root,
    graphiql: true
  })
);

module.exports = { app, signToken, verifyJwt };
