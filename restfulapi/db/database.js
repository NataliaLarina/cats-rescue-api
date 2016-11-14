var mongoose = require('mongoose');
// this connects us to our database
// var connectionString = process.env.MONGODB_URI || process.env.DB;
var connectionString = 'mongodb://127.0.0.1/cats';
console.log('Attempting to connect to MongoDB');

mongoose.connect(connectionString); // connect to the db supplied in the connectionString

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to: ' + connectionString);
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose error! ' + error);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected from: ' + connectionString);
});

