'use strict'

const auth = require('../helpers/authorizer');
const router = require('express').Router();
const taskCtrl = require('../controllers/taskControl')

// router.get('/', (req, res) => {
//   console.log('task');
//   res.send('task');
// })

// create
router.post('/', auth.isCurrentUser, taskCtrl.createTask)

// read
router.get('/', auth.isAdmin, taskCtrl.getAll)
router.get('/:id', taskCtrl.getTaskByUserId)
// router.get('/:id', auth.isCurrentUser, taskCtrl.findById)

// update
router.put('/:id', auth.isCurrentUser, taskCtrl.updateTask)

// delete
router.delete('/:id', taskCtrl.deleteTask)
// router.delete('/:id', auth.isCurrentUser, taskCtrl.deleteTask)
router.delete('/', auth.isAdmin, taskCtrl.deleteAll)  // only for testing purpose

module.exports = router;