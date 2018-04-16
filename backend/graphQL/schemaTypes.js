const typeDefs = `
type User {
 id: ID!
 name: String!
 messages: [Message]
}
type Message {
 id: ID! 
 text: String!
 user: User
}
type Query {
  messages: [Message] 
  users(id: ID!): User
}
type Mutation{
 sendMessage(text: String!, user: String): Message
}
`;
module.exports = typeDefs;
