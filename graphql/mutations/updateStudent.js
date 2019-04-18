const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLString = require("graphql").GraphQLString;
const StudentType = require("../types/student");
const StudentModel = require("../../models/student");

exports.update = {
  type: StudentType.studentType,
  args: {
    id: {
      name: "id",
      type: new GraphQLNonNull(GraphQLString)
    },
    firstName: {
      type: GraphQLString
    },
    lastName: {
      type: GraphQLString
    },
    birthDate: {
      type: GraphQLString
    }
  },
  resolve(root, params) {
    console.log("Inside update", params);
    return StudentModel.findByIdAndUpdate(
      params.id,
      {
        $set: {
          firstName: params.firstName,
          lastName: params.lastName,
          birthDate: params.birthDate
        }
      },
      { new: true }
    ).catch(err => new Error(err));
  }
};
