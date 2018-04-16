const graphQLTools = require('graphql-tools');
const resolvers = require('./Resolvers');
const typeDefs = require('./schemaTypes');

module.exports = graphQLTools.makeExecutableSchema({ typeDefs, resolvers });
