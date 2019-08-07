const { app } = require("./app");
const { PORT = 9090 } = process.env;

app.listen(PORT, () => {
  console.log(`ApolloGraphQl server now running on localhost:${PORT}`);
});
