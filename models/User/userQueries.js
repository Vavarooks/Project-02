const insertUser = "INSERT INTO user (name) VALUES (?); ";
const insertJedi = "INSERT INTO user (name,jedi,sith) VALUES (?,true,false);"
const insertSith = "INSERT INTO user (name,jedi,sith) VALUES (?,false,true);"
const getuser = "SELECT * FROM user;";
const deleteUserById = "DELETE FROM user WHERE id = ?;";
const getUsersById = "SELECT * FROM user WHERE id = ?;";
const getJediById = "SELECT jedi FROM user WHERE id = ?";
const getsithbyId = "SELECT sith from user WHERE id = ?";
const updateJediById = "UPDATE user SET jedi = ? WHERE id = ?;";
const updateSithById = " UPDATE user SET sith = ? WHERE id = ?;";
//  const updateUserjediById = "UPDATE user SET sith = ? WHERE id = ?";
//  const updateUser = "UPDATE user SET 
// const insertSith = "INSERT INTO user (name,jedi,sith) VALUES (?,false,true);";
// const insertJedi = "INSERT INTO user SET name = ?, jedi = false, sith = true;";

module.exports = {
    insertJedi,
    insertSith,
    insertUser,
    getuser,
    deleteUserById,
    getUsersById,
    //      updateUser,
    updateSithById,
    updateJediById,
    getsithbyId,
    getJediById
};