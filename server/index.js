const express = require('express');
const EventEmitter = require('events');
const cors = require('cors');
require('./db/mongoose');


//routes constants
const userRoutes = require('./routers/user');
const subjectRoutes = require('./routers/subject');
const attendanceRoutes = require('./routers/attendance');

const app = express();
app.use(express.json());
app.use(cors());

//event emmiter increased
const emitter = new EventEmitter();
emitter.setMaxListeners(20);
//Routers
app.use(userRoutes);
app.use(subjectRoutes);
app.use(attendanceRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('APP IS RUNNING ON PORT '+PORT);
});
