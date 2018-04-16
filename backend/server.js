const bodyParser = require('body-parser');
const express = require('express');
const PORT = process.env.PORT || 9000;
const GraphQlHTTP = require('express-graphql');
const schema = require('./graphql/Schema');
const Cors = require('cors');
const app = express();
app.use('*', Cors({
    credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/graphql', GraphQlHTTP({schema, graphiql: true}));
app.listen(PORT);
