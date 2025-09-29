// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

connectDB();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes); 
app.use('/api', protectedRoutes); 

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`); 
});