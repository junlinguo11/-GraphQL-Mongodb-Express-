const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
    } = require ('graphql');

    const UserType = require('./UserTypeQL.js');
    const User = require('./UserSchema.js');
  
    module.exports = {
    addUser:{
      type:UserType,
      args: {
        name:{
          name:'name',
          type:new GraphQLNonNull(GraphQLString)
        },
        email:{
          name:'surname',
          type: new GraphQLNonNull(GraphQLString)
        },
        age:{
          name:'age',
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: (root, {name, email, age}) => {
        var newUser = new User({name:name, email:email, age:age});
        return newUser.addUser();
      }
    }
  };
  