const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


// const url = 'mongodb://localhost/todo-fancy'  //  local
const url = process.env.MONGO_ATLAS  // atlas
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