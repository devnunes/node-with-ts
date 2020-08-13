export default {
  jwt: {
    // gostack11
    secret: process.env.APP_SECRET || 'default',
    expiresIn: '1d',
  },
};
