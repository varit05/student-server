const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLString = require("graphql").GraphQLString;
const StudentType = require("../types/student");
const StudentModel = require("../../models/student");

exports.remove = {
  type: StudentType.studentType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedstudent = StudentModel.findOneAndDelete(params.id).exec();
    // const removedstudent = StudentModel.findByIdAndRemove(params.id).exec();
    if (!removedstudent) {
      throw new Error("Error");
    }
    return removedstudent;
  }
};
