const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLString = require("graphql").GraphQLString;
const GraphQLInputObjectType = require("graphql").GraphQLInputObjectType;
const StudentType = require("../types/student");
const HobbyType = require("../types/hobby");
const StudentModel = require("../../models/student");

exports.add = {
  type: StudentType.studentType,
  args: {
    firstName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    birthDate: {
      type: new GraphQLNonNull(GraphQLString)
    },
    // hobbies: {
    //   type: new GraphQLInputObjectType(HobbyType.hobbyType)
    // },
    photo: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    console.log("params", params);
    const stuModel = new StudentModel(params);
    console.log(stuModel);
    const newStudent = stuModel.save();
    if (!newStudent) {
      throw new Error("Error");
    }
    return newStudent;
  }
};
