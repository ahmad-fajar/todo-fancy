'use strict'
const router = require('express').Router();

const fbCtrl = require('../controllers/fbControl');
const userCtrl = require('../controllers/userControl');

const FB = require('fb');
const fb = new FB.Facebook({ version: '2.8' });


router.get('/', (req, res) => {
  console.log('Index page');
  res.send('Index page');
});

// signin & signup with facebok
router.get('/facebook-login', fbCtrl.login);

// signup without facebook
router.post('/signup', userCtrl.createUser);

// sign in without facebook
router.post('/signin', userCtrl.signin)

module.exports = router;