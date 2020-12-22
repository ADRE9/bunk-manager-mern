const express = require('express');
const EventEmitter = require('events');
const path = require('path');
const cors = require('cors');
require('./db/mongoose');
//require('./controller/scheduledTask');

//routes constants
const userRoutes = require('./routers/user');
const subjectRoutes = require('./routers/subject');
const attendanceRoutes = require('./routers/attendance');
const { builtinModules } = require('module');

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

//Serve static assets if in Production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('APP IS RUNNING ON PORT '+PORT);
});
