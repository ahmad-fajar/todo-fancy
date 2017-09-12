'use strict'

const auth = require('../helpers/authorizer');
const router = require('express').Router();
const userCtrl = require('../controllers/userControl');

// router.get('/', (req, res) => {
//   console.log('user');
//   res.send('user');
// })

// create
// router.post('/', userCtrl.createUser);  // currently not needed. createUser udah dipakai di signup (routing-nya index)

// auth
router.get('/auth', userCtrl.userAuthCheck);

// read
router.get('/', auth.isAdmin, userCtrl.getAll);
router.get('/:id', auth.isCurrentUser, userCtrl.findById);

// update
router.put('/:id', auth.isCurrentUser, userCtrl.updateUser); // untuk update user role, sementara masih di blok di model

// delete
router.delete('/:id', auth.isAdmin, userCtrl.deleteUser);
router.delete('/', auth.isAdmin, userCtrl.deleteAll);


module.exports = router;