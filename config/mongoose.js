// configuration for creating database connection
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;