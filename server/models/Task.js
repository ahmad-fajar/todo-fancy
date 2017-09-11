'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  task:{
    type: String,
    required: true
  },
  desc:{
    type: String,
    required: true
  },
  duedate:{
    type: Date,
    required: true
  },
  tags:{
    type: String
  },
  isComplete: {
    type: Boolean,
    default: false  // true-false, bukan 1-0
  }
}, {
  timestamps: true
})

const Task = mongoose.model('tasks', taskSchema);
module.exports = Task;