const GraphQLObjectType = require("graphql").GraphQLObjectType;
const GraphQLList = require("graphql").GraphQLList;
const StudentModel = require("../../models/student");
const studentType = require("../types/student").studentType;

// Query
exports.queryType = new GraphQLObjectType({
  name: "Query",
  fields: function() {
    return {
      students: {
        type: new GraphQLList(studentType),
        resolve: function() {
          const students = StudentModel.find().exec();
          if (!students) {
            throw new Error("Error");
          }
          return students;
        }
      }
    };
  }
});
