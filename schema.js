// schema.js
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
    } = require('graphql');
  
const mongoose = require('mongoose');
const User = require('./models/UserSchema.js');
  
const {
    UserQueries,
    UserMutations,
    UserType
} = require('./models/UserQL.js');
   
  let RootQuery = new GraphQLObjectType({
    name: 'Query',      //Return this type of object
    fields: () => ({
      user: UserQueries.user,
    //   users: UserQueries.users,
    //   hobby: HobbyQueries.hobby,
    //   hobbies: HobbyQueries.hobbies
    })
  });
  
  
  let RootMutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
      addUser: UserMutations.addUser
    })
  });
  
  
  let schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
  });
  
  module.exports = schema;
  