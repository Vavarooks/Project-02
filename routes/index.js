const router = require('express').Router();


const userRoutes = require('./userRoutes');
// /api  prepended to every route declared in here
// todos


// declares a route for /sith/user & /jedi/user
router.use("/user", userRoutes);


module.exports = router; 