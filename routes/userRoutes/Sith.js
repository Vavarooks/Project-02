const router = require('express').Router();

const userController = require('../../controllers/userController');
// /api/todos prepended to every route



router.get('/',userController.getuser);
router.post('/',userController.insertUser);


router.route('/:userId')
    .delete(userController.deleteUserById)
    .get(userController.getSithById)
    // .patch(userController.updateTodoTitleById);


module.exports = router;


 