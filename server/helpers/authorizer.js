'use strict'

const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

// is admin and only admin
exports.isAdmin = (req, res, next) => {
  // console.log('isAdmin')
  let token = req.headers.todotoken;

  if (token == undefined) return res.send('login dulu om..')

  jwt.verify(token, secret, (err, decrypted) => {
    // console.log(decrypted);
    if(decrypted.role === 'admin') {
      console.log('admin')
      next();
    } else {
      console.log('bukan admin');
      res.send('Insufficient right');
    }
  });
};


// is current user or admin
exports.isCurrentUser = (req, res, next) => {
  console.log(isCurrentUser)
  let token = req.headers.todotoken;

  if (token == undefined) return res.send('login dulu om..');

  jwt.verify(token, secret, (err, decrypted) => {
    if(decrypted.role === 'user') {
      if(decrypted.id == req.params.id) {
        next();
      }
    } else if (decrypted.role === 'admin') {
      next();
    } else {
      this.user = false
      res.send('Not your account');
    }
  })
};