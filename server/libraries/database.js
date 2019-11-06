import mongoose from 'mongoose';

export default {
  start: () => {
    mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, (err) => {
      if (err) return console.error(err);
      console.log('MongoDB connected successfully.');
    });
  }
}
