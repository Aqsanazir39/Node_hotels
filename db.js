const mongoose = require('mongoose');

// define the mongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () =>{
  console.log('Connected to mongoDb server');
  
});
// db.on('MongoDb Error' , (err) =>{
//   console.log('MongoDB connection errors', err);
  
// });

// db.on('disconnected', ()=>{
//   console.log('MongoDb disconnected');
  
// })

//Export the Database connection
module.exports = db;