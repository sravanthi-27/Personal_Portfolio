const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const { execPath } = require('node:process')


//dotenv configuration
dotenv.config()

//rest object
const app = express()

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api/v1/portfolio',require('./routes/portfolioRoute'));

//port
const PORT = process.env.PORT || 8080


//listen
app.listen(PORT, () => {
    console.log(`Server Running On PORT ${PORT}`);    
});