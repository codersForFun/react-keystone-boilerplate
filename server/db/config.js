import mongoose from 'mongoose';
import { db } from './db';

export default () => {
  const connect = () => {
    // Set native promises as mongoose promise
    mongoose.Promise = global.Promise;
    // MongoDB Connection
    mongoose.connect(db.mongoURL, (error) => {
      if (error) {
        console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
        throw error;
      }
    });
  };
  connect();

  mongoose.connection.on('error', console.log);
  mongoose.connection.on('disconnected', connect);
};
