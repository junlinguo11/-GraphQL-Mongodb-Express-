const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
    } = require('graphql');

const UserType = require('./UserTypeQL.js');
const User = require('./UserSchema.js');

module.exports = {
    // users: {
    //   type: new GraphQLList(UserType),
    //   resolve: User.getListOfUsers
    // },
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve: (root, {id}) => {
        return User.getUserById(id);
      }
    }
  };
  