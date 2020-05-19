const mysql = require('mysql');
let connection;


// if(process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: 'zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//         port: 3306,
//         user: 'gmridpuo8yzx3m17',
//         password: 'khfrii7b56xj14fl',
//         database: 'ep1eke73vidmeb6u'
//     });
// }


if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      host: process.env.HOST,
      port: 3306,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE
  });
}

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });


module.exports = connection;