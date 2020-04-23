const connection = require('../config/Connections');
const userQueries = require('../models/User/userQueries');


module.exports = {
    getuser: (req, res) => {
        connection.query(userQueries.getuser, (err, user) => {
            if(err) {
                throw err;
            }
            return res.json(user);
        });
    },
    
    insertUser: (req, res) => {
        const { jedi, sith  } = req.body;
        connection.query(userQueries.insertUser, [jedi,sith], (err, dbRes) => {
            if(err) {
                throw err;
            }
            connection.query(userQueries.getuser, (err, user) => {
                if(err) {
                    throw err;
                }
                return res.json(user);
            });
        });
    },
    deleteUserById: (req, res) => {
        const { userId } = req.params;
        connection.query(userQueries.deleteUserById, parseInt(userId), (err, dbRes) => {
            if(err) {
                throw err;
            }
            return res.json({ success: true });
        });
    },
    getUserById: (req, res) => {
        const { userId } = req.params;
        connection.query(userQueries.getUserById, parseInt(userId), (err, user) => {
            if(err) {
                return res.json(err);
            }
            return res.json(user[0]);
        });
    },
    updateJediById: (req, res) => {
        const { userId } = req.params;
         

        connection.query(userQueries.updateJediById, [true, userId], (err, dbJson) => {``
            if(err) {
                throw new Error(err);
            }
            res.json({ success: true });
        });
    },
    updateSithById: (req, res) => {
        const { userId } = req.params;
        

        connection.query(userQueries.updateSithById, [true, userId], (err, dbJson) => {``
            if(err) {
                throw new Error(err);
            }
            res.json({ success: true });
        });
    },
  
}