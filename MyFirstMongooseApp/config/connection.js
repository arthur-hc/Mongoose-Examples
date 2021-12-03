module.exports = (uri) => {
  const mongoose = require('mongoose');

  mongoose.connect(`mongodb://${uri}`);

  mongoose.connection.on('connected', () => {
    console.log('DB connected');
  });

  mongoose.connection.on('error', (error) => {
    console.log(`Connection Error(reason): ${ error }`);
  });

  mongoose.connection.on('disconnect', () => {
    console.log('DB disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Connection was closed.');
      process.exit(0);
    });
  });  
} 
