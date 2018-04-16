import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Messenger from './Components/Messenger'
import {ApolloProvider} from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'

const client = new ApolloClient({
	link: new HttpLink({uri: 'http://localhost:9000'+'/graphql'}),
  	cache: new InMemoryCache(),
});

const Main = () => (
	<ApolloProvider client={client}>
		<MuiThemeProvider>
			<Messenger />
		</MuiThemeProvider>
	</ApolloProvider>
);

ReactDOM.render(<Main />, document.getElementById('app'));
