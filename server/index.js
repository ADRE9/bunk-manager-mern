const express = require('express');
const cors = require('cors');
require('./db/mongoose');


//routes constants
const userRoutes = require('./routers/user');


const app = express();
app.use(express.json());
app.use(cors());

//Routers
app.use(userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('APP IS RUNNING ON PORT '+PORT);
});
