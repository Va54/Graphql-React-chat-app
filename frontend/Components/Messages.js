import React, {Component} from 'react'
import {ListItem} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    scrollToBottom() {
        this.end.scrollIntoView({behavior: "smooth"})
    }
    componentDidMount() {
        this.scrollToBottom()
    }
    componentDidUpdate() {
        this.scrollToBottom()
    }
    render() {
        let {loading, error, messages} = this.props.data;
        return (
            <div>
                {loading && <ListItem> <CircularProgress/> </ListItem>}
                {error && <ListItem primaryText='Error' secondaryText={error.message}/>}
                {messages && messages.map(({text, id, user}) => <ListItem key={id} primaryText={text}
                                                                          secondaryText={user ? user.name : 'Server'}/>)}
                <div style={{float: "left", clear: "both"}} ref={ref => this.end = ref}/>
            </div>
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

const ApolloMessages = graphql(messagesListQuery, {options: {pollInterval: 500}})(Messages);
export default ApolloMessages
