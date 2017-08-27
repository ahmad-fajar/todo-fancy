'use strict'
const router = require('express').Router();
const fbCtrl = require('../controllers/fbControl');
const userCtrl = require('../controllers/userControl');

const FB = require('fb');
const fb = new FB.Facebook({ version: '2.8' });

const setAccessToken = (req, res, next) => {
  FB.setAccessToken(req.headers.accesstoken);
  next();
}

router.get('/', (req, res) => {
  console.log('Index page');
  res.send('Index page');
});

router.get('/facebook-login', fbCtrl.login)
router.post('/signup', userCtrl.createUser)

module.exports = router;