'use strict'

// requires
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');


// mongo connect
const url = process.env.MONGO_ATLAS || 'mongodb://localhost/todo-fancy'
mongoose.connect(url, (err, res) => { 
  if (!err) console.log('>>> Database connected')
  else console.log('>>> Failed to connect to database')
})


// init express
const app = express();


// app uses
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/*+json'}));
app.use(bodyParser.json({ type : 'application/x-www-form-urlencoded'}));


// routes
const index = require('./routers/index');
const task  = require('./routers/task');
const user  = require('./routers/user');

app.use('/', index);
app.use('/task', task);
app.use('/user', user);


// app listen
app.listen(3000, (err, res) => {
  if (!err) console.log('>>> Listening on port 3000...')
  else console.log('>>> Something wrong')
})