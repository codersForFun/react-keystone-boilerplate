export const db = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/react-boilerplate',
  port: process.env.PORT || 8000,
};

export default {
  db,
};
