const express = require('express');
const EventEmitter = require('events');
const path = require('path');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
//const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const connectDB = require('./db/mongoose');
//require('./controller/scheduledTask');

//routes constants
const userRoutes = require('./routers/user');
const subjectRoutes = require('./routers/subject');
const attendanceRoutes = require('./routers/attendance');
const { builtinModules } = require('module');

const app = express();

//set security HTTP headers
/*app.use(helmet({
  contentSecurityPolicy: {
    scriptSrc:["'self'", "https://salty-brook-29410.herokuapp.com/"],
  }
}));*/

//conect db
connectDB();

//limit requests from same IP
const limiter = rateLimit({
  max: 100,
  windowMs: 60*60*1000,
  message: 'To many request from this IP, please try again after an hour!'
});

app.use('/', limiter);

app.use(express.json());

//data sanitization against noSQL query injection
app.use(mongoSanitize());

//data sanitization against xss
app.use(xss());



//event emmiter increased
const emitter = new EventEmitter();
emitter.setMaxListeners(20);
app.use(cors());


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
