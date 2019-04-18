const GraphQLObjectType = require("graphql").GraphQLObjectType;
const GraphQLNonNull = require("graphql").GraphQLNonNull;
const GraphQLList = require("graphql").GraphQLList;
const GraphQLID = require("graphql").GraphQLID;
const GraphQLString = require("graphql").GraphQLString;

// student Type
exports.studentType = new GraphQLObjectType({
  name: "student",
  fields: function() {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      firstName: {
        type: GraphQLString
      },
      lastName: {
        type: GraphQLString
      },
      birthDate: {
        type: GraphQLString
      },
      // hobbies: {
      //   type: new GraphQLList(GraphQLString)
      // },
      photo: {
        type: GraphQLString
      }
    };
  }
});
