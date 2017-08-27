'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  fbid: String,
  password: {
    type: String,
    required: true
  },
  salt : {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role:{
    type: String,
    default: 'user',
    required: true
  },
  task_list: [{
      type: Schema.Types.ObjectId,
      ref: 'tasks'
    }]
}, {
  timestamps: true
})

const User = mongoose.model('users', userSchema);
module.exports = User;