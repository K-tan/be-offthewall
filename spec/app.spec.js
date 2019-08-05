process.env.NODE_ENV = "test";
const { app } = require("../listen");
// const { expect } = jest;
const request = require("supertest");

describe("", () => {
  it("", () => {
    return request(app)
      .post("/")
      .send({
        query: `query {
                fetchAllWalls {
                    wall_id
                    latitude
                }
                }`
      })
      .end((err, res) => {
        // if (err) console.log(err);
        // else console.log(res);
      })
      .then(({ body }) => {
        expect(body);
      });
  });
});
