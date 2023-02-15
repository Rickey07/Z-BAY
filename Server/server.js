require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const connectToDatabase = require('./Constants/dbconnect');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { default: mongoose } = require('mongoose');

// Routes Import





app.use(cors());
app.use(morgan());
app.use(express.json())
app.use(express.urlencoded({extended:true}));


// connection to  database

mongoose.set("strictQuery",true)
connectToDatabase();


app.listen(port,() => {
    console.log(`Server is running on PORT ${port}`)
})


