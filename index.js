const express = require("express");
const mongoose = require("./config/mongoose");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const db = mongoose();
const app = express();

app.use("*", cors());

const studentSchema = require("./graphql/index").studentSchema;
app.use(
  "/graphql",
  cors(),
  graphqlHTTP({
    schema: studentSchema,
    rootValue: global,
    graphiql: true
  })
);

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // By default, Browser sends options request in Cross-origin resource sharing
  // It is also known as In-flight request
  // https://stackoverflow.com/questions/29954037/why-is-an-options-request-sent-and-can-i-disable-it
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  }
});

// Up and Running at Port 4000
app.listen(process.env.PORT || 4000, () => {
  console.log("A GraphQL API running at port 4000");
});
