// server.js
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const wrestlerRouter = require('./api/router/wrestlerRouter')
const matchRouter = require('./api/router/matchRouter')


const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use('/wrestlers', wrestlerRouter)
app.use('/matches', matchRouter)

app.listen(port, () => {
  console.log(`Express.js server is running on port ${port}`);
});
