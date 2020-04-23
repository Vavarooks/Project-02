
 const insertUser = "INSERT INTO user (name) VALUES (?);";

 
 const getuser = "SELECT * FROM user;";
 const deleteUserById = "DELETE FROM user WHERE id = ?;";
 const getUserById = "SELECT * FROM user WHERE id = ?;";
 const updateJediById = "UPDATE user SET jedi = ? WHERE id = ?";
 const updateSithById = "UPDATE user SET sith = ? WHERE id = ?";



//  const updateUserjediById = "UPDATE user SET sith = ? WHERE id = ?";

//  const updateUser = "UPDATE user SET 




 module.exports = {
     insertUser,
     getuser,
     deleteUserById,
     getUserById,
//      updateUser,
updateSithById,
     updateJediById,
  };