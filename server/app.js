const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// const url = 'mongodb://localhost/todo-fancy'  //  local
const url = process.env.MONGO_ATLAS  // atlas
// const url = 'mongodb://hacktiv8:hacktiv8Super@cluster0-shard-00-00-remkh.mongodb.net:27017,cluster0-shard-00-01-remkh.mongodb.net:27017,cluster0-shard-00-02-remkh.mongodb.net:27017/todo-fancy?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
mongoose.connect(url, () => console.log(' --- database connected ---'))


const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/*+json'}));
app.use(bodyParser.json({ type : 'application/x-www-form-urlencoded'}));


const index = require('./routers/index');
const task  = require('./routers/task');
const user  = require('./routers/user');

app.use('/', index);
app.use('/task', task);
app.use('/user', user);


app.listen(3000, () => console.log('Listening on port 3000...'))