const express = require('express');
const jediRoutes = require("./routes/userRoutes/Jedi");
const sithRoutes = require("./routes/userRoutes/Sith");


const PORT = process.env.PORT || 3001;

const app = express();




if(process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Declare routes right here.
// const routes = require('./routes');

// Prepend / to any route declared inside of routes
app.use("/jedi",jediRoutes);

app.use("/sith",sithRoutes)

app.listen(PORT, () => console.log('Port started on port: ' + PORT));