const mongoose = require('mongoose');

const connectDB = async () => {

  var dbURI = process.env.URI; 
  
  // Create the database connection 
  mongoose.connect(dbURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, autoIndex: true, useFindAndModify:false}); 

  // CONNECTION EVENT LISTENERS
  
  // When successfully connected
  mongoose.connection.on('connected',function () { 
    console.log('DB connection established, open to ' + dbURI);
  });

  // when reconnected
  mongoose.connection.on('reconnected',function () { 
    console.log('DB connection reestablished, open to ' + dbURI);
  });

  // when disconnected
  mongoose.connection.on('disconnected',function () { 
    console.log('DB connection disconnected');
  }); 

  // If the Node process ends, close the Mongoose connection 
  process.on('SIGINT', function() {   
    mongoose.connection.close(function () { 
      console.log('DB connection disconnected through app termination'); 
      process.exit(0); 
    }); 
  }); 

  // if connection throws an error
  mongoose.connection.on('error', function (err) { 
    console.log('DB connection error: ' + err); 
  });
}

module.exports = connectDB;
