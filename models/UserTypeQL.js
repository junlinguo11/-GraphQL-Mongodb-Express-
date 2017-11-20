const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLID
    } = require ('graphql');

module.exports = new GraphQLObjectType({
    name: 'User',
    description: 'A user',
    fields: () => ({
        _id: {
        type: new GraphQLNonNull(GraphQLID)
        },
        name: {
        type: GraphQLString
        },
        email:{
        type: GraphQLString
        },
        age:{
        type: GraphQLInt
        }
    })
});
  