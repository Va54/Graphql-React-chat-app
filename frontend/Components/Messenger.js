import React, {Component} from 'react'
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import AppBar from 'material-ui/AppBar';
import ApolloMessages from './Messages'
import ApolloMessageSender from './MessageSender'

class Messenger extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', loggedIn: false}
    }
    render() {
        return (
            <div>
                <AppBar title="Chat" showMenuIconButton={false}/>
                <br/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-3"/>
                        <div className="col-6">
                            <Card initiallyExpanded={true}>
                                <CardText expandable={true}>
                                    <List>
                                        <div>
                                            <ApolloMessages/>
                                        </div>
                                        <Divider/>
                                        <ApolloMessageSender user={this.state.username} loggedIn={this.state.loggedIn}/>
                                    </List>
                                </CardText>
                            </Card>
                            <br/>
                            <br/>
                            <br/>
                            <Card initiallyExpanded={true}>
                                <CardHeader subtitle='User' actAsExpander={true} showExpandableButton={true}/>
                                <CardText expandable={true}>
                                    <TextField disabled={this.state.loggedIn} style={{width: '90%'}} hintText="Nickname"
                                               value={this.state.username}
                                               onChange={(e, value) => this.setState({username: value})}/>
                                    <RaisedButton label={this.state.loggedIn ? 'Log Out' : 'Log In'} onClick={() => this.setState({loggedIn: !this.state.loggedIn})}/>
                                </CardText>
                            </Card>
                        </div>
                        <div className="col-3"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Messenger
