'use strict'

const auth = require('../helpers/authorizer');
const router = require('express').Router();
const taskCtrl = require('../controllers/taskControl')

const setAccessToken = (req, res, next) => {
  FB.setAccessToken(req.headers.accesstoken);
  next();
}

// router.get('/', (req, res) => {
//   console.log('task');
//   res.send('task');
// })

// create
router.post('/', auth.isCurrentUser, taskCtrl.createTask)

// read
router.get('/', auth.isAdmin, taskCtrl.getAll)
router.get('/:id', auth.isCurrentUser, taskCtrl.findById)

// update
router.put('/:id', auth.isAdmin, taskCtrl.updateTask)

// delete
router.delete('/:id', auth.isCurrentUser, taskCtrl.deleteTask)
router.delete('/', auth.isAdmin, taskCtrl.deleteAll)  // only for testing purpose

module.exports = router;