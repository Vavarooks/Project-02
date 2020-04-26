const connection = require('../config/connection');
const userQueries = require('../models/User/userQueries');


module.exports = {
    getuser: (req, res) => {
        connection.query(userQueries.getuser, (err, user) => {
            if (err) {
                throw err;
            }
            return res.json(user);
        });
    },

    insertSith: (req, res) => {
        const { sith } = req.body;
        connection.query(userQueries.insertSith, sith, (err, dbRes) => {
            if (err) {
                throw err;
            }
            connection.query(userQueries.getuser, (err, user) => {
                if (err) {
                    throw err;
                }
                return res.json(user);
            });
        });
    },


    insertJedi: (req, res) => {
        const { jedi} = req.body;
        console.log(jedi);
        connection.query(userQueries.insertJedi, jedi, (err, dbRes) => {
            if (err) {
                throw err;
            }
            console.log(dbRes);
            // connection.query(userQueries.getuser, (err, user) => {
            //     if (err) {
            //         throw err;
            //     }
            //     return res.json(user);
            // });
        });
    },


    deleteUserById: (req, res) => {
        const { userId } = req.params;
        connection.query(userQueries.deleteUserById, parseInt(userId), (err, dbRes) => {
            if (err) {
                throw err;
            }
            return res.json({ success: true });
        });
    },
    getUsersById: (req, res) => {
        const { userId } = req.params;
        connection.query(userQueries.getUsersById, parseInt(userId), (err, user) => {
            if (err) {
                return res.json(err);
            }
            return res.json(user[0]);
        });
    },

    getjediById: (req, res) => {
        const { userId } = req.params;
        connection.query(userQueries.getjediById, parseInt(userId), (err, user) => {
            if (err) {
                return res.json(err);
            }
            return res.json(user[0]);
        });
    },
    getsithById: (req, res) => {
        const { userId } = req.params;
        connection.query(userQueries.getsithById, parseInt(userId), (err, user) => {
            if (err) {
                return res.json(err);
            }
            return res.json(user[0]);
        });
    },




    updateJediById: (req, res) => {
        const { userId } = req.params;


        connection.query(userQueries.updateJediById, [true, userId], (err, dbJson) => {
            ``
            if (err) {
                throw new Error(err);
            }
            res.json({ success: true });
        });
    },
    updateSithById: (req, res) => {
        const { userId } = req.params;


        connection.query(userQueries.updateSithById, [true, userId], (err, dbJson) => {
            ``
            if (err) {
                throw new Error(err);
            }
            res.json({ success: true });
        });
    },

}