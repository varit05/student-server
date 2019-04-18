const GraphQLObjectType = require("graphql").GraphQLObjectType;
const GraphQLList = require("graphql").GraphQLList;
const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLString = require("graphql").GraphQLString;
const StudentModel = require("../../models/student");
const studentType = require("../types/student").studentType;

// Query
exports.queryType = new GraphQLObjectType({
  name: "Query",
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  fields: function() {
    return {
      student: {
        type: new GraphQLList(studentType),
        resolve: function() {
          const student = StudentModel.findById(id).exec();
          if (!student) {
            throw new Error("Error");
          }
          return student;
        }
      }
    };
  }
});
