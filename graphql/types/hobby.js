const GraphQLObjectType = require("graphql").GraphQLObjectType;
const GraphQLString = require("graphql").GraphQLString;

// Hobby Type
exports.hobbyType = new GraphQLObjectType({
  name: "hobby",
  fields: function() {
    return {
      name: {
        type: GraphQLString
      }
    };
  }
});
