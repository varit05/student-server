const express = require("express");
const mongoose = require("./config/mongoose");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const db = mongoose();
const app = express();

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
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  //intercepts OPTIONS method
  if ("OPTIONS" === req.method) {
    //respond with 200
    res.send(200);
  } else {
    //move on
    next();
  }
});

// Up and Running at Port 4000
app.listen(process.env.PORT || 4000, () => {
  console.log("A GraphQL API running at port 4000");
});
