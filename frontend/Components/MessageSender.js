import React, {Component} from 'react'
import {ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

class MessageSender extends Component {
    constructor(props) {
        super(props);
        this.state = {textValue: ''}
    }

    render() {
        let {mutate, user, loggedIn} = this.props;
        let {textValue} = this.state;
        return (
            <ListItem disabled={true}>
                <TextField disabled={!loggedIn || user === ''} style={{width: '90%'}}
                           hintText={user ? "Message " + user : "Type Message"} value={textValue}
                           onChange={(e, value) => this.setState({textValue: value})}/>
                <FloatingActionButton mini={true} onClick={() => {
                    if (textValue) {
                        mutate({
                            variables: {text: textValue, user},
                            refetchQueries: [{query: messagesListQuery}]
                        });
                        this.setState({textValue: ''})
                    }
                }}>
                    <i className="material-icons">person</i>
                </FloatingActionButton>
            </ListItem>
        )
    }
}

const messagesListQuery = gql`
   query MessagesQuery {
     messages {
       id
       text
       user{
       	name
       }
     }
   }
 `;
const messageSenderMutation = gql`
mutation messageSenderMutation($text: String!, $user: String)
{
 sendMessage(text: $text, user: $user)
 {
   id
   text
 }
}
`;
const ApolloMessageSender = graphql(messageSenderMutation)(MessageSender);
export default ApolloMessageSender
