 const router = require('express').Router();

 const usersController = require('../../controllers/userController');
 
 router.post('/sith', usersController.INSERT_SITH)
 router.post('/jedi', usersController.INSERT_JEDI)
 router.get('/users', usersController.SELECT_ALL_USERS)
 router.delete('/users/:userId',usersController.DELETE_BY_ID)
 router.get('/users/:userId', usersController.SELECT_USER_BY_ID)
 router.patch('/users/:userId', usersController.UPDATE_BY_NAME)
//  only one (router.patch)
 
  
 
 module.exports = router;