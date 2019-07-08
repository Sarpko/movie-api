
const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb+srv://user:1234@movie-api-2kxzv.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

  mongoose.connection.on('open', () => {
     console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });


  mongoose.Promise=global.Promise;
};