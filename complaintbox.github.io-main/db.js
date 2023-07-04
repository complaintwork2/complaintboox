const mongoose = require('mongoose');

const dbconnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://mayankdb:mayank2005@cluster0.bynckph.mongodb.net/complaintbox?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Failed to connect to MongoDB Atlas:', error);
  }
};

module.exports = dbconnect;
