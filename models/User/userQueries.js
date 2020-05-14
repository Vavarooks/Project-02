const SELECT_ALL_USERS = "SELECT * FROM user;";
const INSERT_JEDI = "INSERT INTO user (name,jedi,sith) VALUES (?,true,false);";
const INSERT_SITH = "INSERT INTO user (name,jedi,sith) VALUES (?,false,true);";
const DELETE_BY_ID = "DELETE FROM user WHERE id = ?;";
const SELECT_USER_BY_ID = "SELECT * FROM user where id=?;";
const UPDATE_BY_NAME = "UPDATE user SET NAME = ? WHERE id = ?;";



module.exports = {
    SELECT_ALL_USERS,
    INSERT_JEDI,
    DELETE_BY_ID,
    SELECT_USER_BY_ID,
    UPDATE_BY_NAME,
    INSERT_SITH,

 }

