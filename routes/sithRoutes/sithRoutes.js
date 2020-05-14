const router = require('express').Router();

const usersController = require('./../../controllers/userController');

// router.post('/', usersController.BECOME_SITH)
// router.get('/', usersController.SELECT_ALL_USERS)
// router.delete('/:userId',usersController.DELETE_BY_ID)
// router.get('/:userId', usersController.SELECT_USER_BY_ID)
// router.patch('/:userId', usersController.UPDATE_BY_NAME)
// //  only one (router.patch)

router.post('/', usersController.INSERT_SITH)
router.get('/users', usersController.SELECT_ALL_USERS)
 router.delete('/users/:userId',usersController.DELETE_BY_ID)
 router.get('/users/:userId', usersController.SELECT_USER_BY_ID)
 router.patch('/users/:userId', usersController.UPDATE_BY_NAME)

 

module.exports = router;