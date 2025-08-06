const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// dotenv configuration
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoute'));

// -------------------- DEPLOYMENT --------------------
const __dirname1 = path.resolve(); // Needed for correct directory path

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname1, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname1, 'client', 'build', 'index.html'));
  });
}
// ----------------------------------------------------

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`✅ Server Running on PORT ${PORT}`);
});
