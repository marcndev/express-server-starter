import app from './config/express';
require('dotenv').config();

const PORT = process.env.PORT || process.env.LISTEN_DEV_PORT;

app.listen(PORT, error => {
  if (error) throw new Error(error);
  console.log(`Server listening on port: ${PORT}`)
});