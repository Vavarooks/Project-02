const router = require('express').Router();

const userController = require('../controllers-old/userController');
// /api/todos prepended to every route



router.get('/',userController.getuser);
router.post('/',userController.insertUser);


router.route('/:userId')
    .delete(userController.deleteUserById)
    .get(userController.getJediById)
    // .patch(userController.updateTodoTitleById);


module.exports = router;
