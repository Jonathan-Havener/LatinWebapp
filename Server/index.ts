const express = require('express')
const bodyParser = require('body-parser')
const app = express();
var cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const dbConfig = require('./config/database.ts')
var mongoose = require('mongoose');
mongoose.connect(dbConfig.url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () =>{
    console.log("Successfully connected to the database.")
})

require('./app/routes/route.ts')(app);

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});