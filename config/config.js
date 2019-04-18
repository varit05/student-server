module.exports = {
  //MongoDB configuration
  development: {
    db:
      "mongodb+srv://mesaic:mesaic@cluster0-qmred.mongodb.net/test?retryWrites=true",
    app: {
      name: "student-graphql"
    }
  },
  production: {
    db:
      "mongodb+srv://mesaic:mesaic@cluster0-qmred.mongodb.net/test?retryWrites=true",
    app: {
      name: "student-graphql"
    }
  }
};
