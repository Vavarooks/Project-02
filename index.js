const express = require('express');
const myroute = require('./routes/userRoutes/user')
const mysql = require('mysql')
const cors = require('cors')
// const sithRoutes = require('./routes/sithRoutes/sithRoutes')
  
const PORT = process.env.PORT || 8000;

const app = express();


  

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/" ,myroute)
// app.use("sith" ,sithRoutes)


// app.use("/sith",sithRoutes)
 
 


app.listen(PORT, () => console.log('Port started on port: ' + PORT));