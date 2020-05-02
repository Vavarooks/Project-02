const router = require('express').Router();

const userController = require('../../controllers/userController');
// /api/todos prepended to every route



 router.get('/users',userController.getJedi);
// router.post('/',userController.insertUser);
router.post('/users',userController.insertJedi)

// router.route('/:userId')
    // .delete(userController.deleteUserById)
    // .get(userController.getJediById)
    // .patch(userController.updateTodoTitleById);


module.exports = router;
