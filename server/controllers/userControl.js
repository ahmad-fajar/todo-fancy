'use strict'
const crypt = require('../helpers/crypt');
const jwt = require('jsonwebtoken');
const keygen = require('../helpers/keygen');
const User = require('../models/User');


// create
// create new user
exports.createUser = (req, res) => {
  let salt = keygen()
  let hashed = crypt(req.body.password, salt)
  let data = {
    username : req.body.username,
    password : hashed,
    salt     : salt,
    email    : req.body.email,
    role     : 'user'
  }
  User.create(data)
  .then(user => {
    res.send(user)
  })
  .catch(e => res.send(e))
}


// read
exports.getAll = (req, res) => {
  User.find({})
  .populate('task_list')
  .exec()
  .then(users => {
    res.send(users)
  })
  .catch(e => res.send(e))
}

exports.findById = (req, res) => {
  User.findById(req.params.id)
  .populate('task_list')
  .exec()
  .then(todo => {
    res.send(todo)
  })
  .catch(e => res.send(e))
}


// update
exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
  .then(updated => {
    res.send(updated)
  })
  .catch(e => res.send(e))
}


// delete
exports.deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id)
  .then(removed => {
    res.send(removed)
  })
  .catch(e => res.send(e))
}
// only for testing purpose
exports.deleteAll = (req, res) => {
  User.remove({})
    .then(deleted => res.send('deleted'))
    .catch(e => res.send(e))
}