const env = process.env.NODE_ENV || "development",
  config = require("./config")[env],
  mongoose = require("mongoose");

module.exports = function() {
  mongoose.Promise = global.Promise;
  console.log(config.db);
  const db = mongoose.connect(config.db);
  mongoose.connection
    .on("error", function(err) {
      console.log(err);
      console.log(
        "Error: Could not connect to MongoDB. Issue with mongo npm package".red
      );
    })
    .on("open", function() {
      console.log("Connection extablised with MongoDB");
    });
  return db;
};
