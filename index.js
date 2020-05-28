// const express = require('express');
// const myroute = require('./routes/userRoutes/user')
// const mysql = require('mysql')
// const cors = require('cors')
// // const sithRoutes = require('./routes/sithRoutes/sithRoutes')
  
// const PORT = process.env.PORT || 8000;

// const app = express();


// // if(process.env.NODE_ENV === 'production') {
// //     app.use(express.static('./client/build'));
// // }

// app.use(cors())
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// app.use("/" ,myroute)
// // app.use("sith" ,sithRoutes)


// // app.use("/sith",sithRoutes)
 
 


// app.listen(PORT, () => console.log('Port started on port: ' + PORT));

const express = require('express');
const myroute = require('./routes/userRoutes/user')
const mysql = require('mysql')
const cors = require('cors')
 
const PORT = process.env.PORT || 8000;

const app = express();


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'));
}
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Declare routes right here.
 
// Prepend / to any route declared inside of routes
app.use("/" ,myroute)

app.listen(PORT, () => console.log('Port started on port: ' + PORT));