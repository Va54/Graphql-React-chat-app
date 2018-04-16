const messages = [
    {id: 0, text: 'Hello', user: 0},
];
const users = [
    {id: 0, name: 'Vardan'},
];
module.exports = {
    Query: {
        messages: () => messages,
        users: (root, {id}) => users.find(user => user.id === id)
    },
    Mutation: {
        sendMessage: (root, {text, user}) => {
            const newMessage = {id: messages.length + 1, text: text};
            const oldUser = users.find(db_user => db_user.name === user);
            if (oldUser) {
                newMessage.user = oldUser.id
            }
            else {
                const newUser = {name: user, id: users.length + 1};
                users.push(newUser);
                newMessage.user = newUser.id
            }
            messages.push(newMessage);
            return newMessage
        }
    },
    User: {
        messages: user => messages.filter(message => message.user === user.id)
    },
    Message: {
        user: message => users.find(user => user.id === message.user)
    }
};
