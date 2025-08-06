// server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoute'));

// -------------------- Deployment Setup --------------------
const __dirname1 = path.resolve(); // Safe to use custom dirname var

app.use(express.static(path.join(__dirname1, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname1, 'client', 'build', 'index.html'));
});
// -----------------------------------------------------------

// Port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});
