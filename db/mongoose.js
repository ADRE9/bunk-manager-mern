const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, autoIndex: true, useFindAndModify:false});

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB;