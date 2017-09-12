'use strict'
const Task = require('../models/Task');
const User = require('../models/User');

const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.createTask = (req, res) => {
  let task = {
    task : req.body.task,
    desc : req.body.desc,
    tags : req.body.tags,
    duedate : req.body.duedate,
    isComplete : false
  }
  let todoToken = jwt.verify(req.body.todoToken, process.env.SECRET)
  Task.create(task)
  .then(created => {
    // res.send(created)
    User.updateOne({
      _id : todoToken.id
    }, {
      $push : {
        task_list : created._id
      }
    })
    .then(added => {
      res.send(added);
    })
    .catch(e => res.send(e))
  })
  .catch(e => res.send(e))
}


// read
exports.getAll = (req, res) => {
  console.log('>>> Requesting all tasks')
  Task.find({})
  .then(tasks => {
    res.send(tasks)
  })
  .catch(e => res.send(e))
}

exports.findById = (req, res) => {
  Task.findOne({_id : req.params.id})
  .then(data => {
    res.send(data)
  })
  .catch(e => res.send(e))
}

exports.getTaskByUserId = (req, res) => {
  User.findById(req.params.id)
  .populate('task_list')
  .exec()
  .then(list => {
    let data= []
    list.task_list.forEach(task => {
      data.push(task)
    })
    res.send(data)
  })
}

// update
exports.updateTask = (req, res) => {
  Task.findOne({_id : req.params.id})
  .then(update => {
    let task = {
      task : req.body.task || update.task,
      desc : req.body.desc || update.desc,
      duedate : req.body.duedate || update.duedate,
      tags : req.body.tags || update.tags,
      isComplete : req.body.isComplete || false
    }
    Task.findOneAndUpdate({_id : req.params.id}, task)
    .then(updated => {
      res.send(updated)
    })
  })
  .catch(e => res.send(e))
}


// delete
exports.deleteTask = (req, res) => {
  Task.remove({_id: req.params.id})
  .then(deleted => {
    res.send(deleted)
  })
  .catch(e => res.send(e))
}
// only for testing purpose
exports.deleteAll = (req, res) => {
  Task.remove({})
  .then(deleted => res.send('deleted'))
  .catch(e => res.send(e))
}