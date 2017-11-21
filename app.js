const express = require('express');
const expressGraphQL = require('express-graphql');
const jsonParser = require("body-parser").json;
const mongoose = require('mongoose');
const schema = require('./schema.js');

const db = require('./models/db');
const app = express();

app.use(jsonParser());

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true
}))

app.listen(3000, () => {
    console.log('server is running on port 3000')
});
