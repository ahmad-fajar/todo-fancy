'use strict'
const crypt = require('../helpers/crypt');
const jwt = require('jsonwebtoken');
const keygen = require('../helpers/keygen');
const User = require('../models/User');

const FB = require('fb');
const fb = new FB.Facebook({ version: '2.8' });

exports.login = (req, res) => {
  let fbtoken = req.headers.fbtoken
  // console.log(fbtoken)
  FB.setAccessToken(fbtoken)

  FB.api('/me', {
    fields: ['id', 'name', 'email']
  }, function (response) {
    // console.log('login response', response)

    User.findOne({
      fbid: response.id
    })
    .then(found => {
      // console.log('found', found)

      // if user not exist
      if (!found) {
        console.log('ga ada usernya')
        let salt = keygen()
        let hashed = crypt(fbtoken, salt)
        let userData = {
          username : response.name,
          fbid     : response.id,
          password : hashed,
          salt     : salt,
          email    : response.email,
          role     : 'user'
        }
        User.create(userData)
        .then(created => {
          // jwt.sign(payload, secret)
          let wrap = {
            id       : created._id,
            username : created.username,
            role     : created.role
          }
          let todoToken = jwt.sign(wrap, process.env.SECRET)
          let data = { username: response.name, todoToken: todoToken }
          res.send(data)
        })

      // if user exist
      } else {
        console.log('ada usernya')
        // console.log('found', found);
        let wrap = {
          id       : found._id,
          username : found.username,
          role     : found.role
        }
        // console.log('wrap', wrap);
        let todoToken = jwt.sign(wrap, process.env.SECRET)
        let data = { username: response.name, todoToken: todoToken }
        res.send(data)
      }

    }) // end of User.findOne
    .catch(e => res.send(e))

  }) // end of FB.api
}
