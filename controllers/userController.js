const connection = require('./../config/connection');
const userQuaries = require('./../models/User/userQueries')
 
// connection.connect((err)=>{
//     if(err){
//         return err
//     }
// })

module.exports = {


    SELECT_ALL_USERS: (req, res) => {

        connection.query(userQuaries.SELECT_ALL_USERS, (err,users)=>{
            if(err){
                console.log(err)
            }
            return res.json(users)
        })
 
    },
    INSERT_JEDI: (req, res) => {
        const { name } = req.body;
        
        connection.query(userQuaries.INSERT_JEDI, name, (err, dbRes) => {
            if (err) {
                throw err;
            }
            console.log(dbRes)
            res.json({success:true})
        });
    },
    INSERT_SITH: (req, res) => {
        const { name } = req.body;
        
        connection.query(userQuaries.INSERT_SITH, name, (err, dbRes) => {
            if (err) {
                throw err;
            }
            console.log(dbRes)
            res.json({success:true})
        });
    },
    DELETE_BY_ID: (req,res) => {

        const {userId} = req.params;
        connection.query(userQuaries.DELETE_BY_ID, parseInt(userId), (err,dbres)=>{
            if(err){
                throw err
            }
            res.json({success:true})
        })
    },
    SELECT_USER_BY_ID: (req,res)=> {
        const {userId} = req.params
        connection.query(userQuaries.SELECT_USER_BY_ID, parseInt(userId), (err,users)=>{
            if(err){
                throw err
            }
            res.json(users[0])
        })
    },
    UPDATE_BY_NAME: (req,res)=>{
        const {userId} = req.params
        const {name} = req.body 
        connection.query(userQuaries.UPDATE_BY_NAME,[name,userId],(err,dbjson)=>{
        res.json({success:true})
        })
    }



   }