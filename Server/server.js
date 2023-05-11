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
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const addressRoutes = require('./routes/address');
const paymentRoutes = require('./routes/payment');




// App Common Middlewares
app.use(cors());
app.use(morgan());
app.use("/uploads",express.static('uploads'))
app.use(express.json())
app.use(express.urlencoded({extended:true}));


// Routes 
app.use('/api',userRoutes);
app.use("/api/category",categoryRoutes)
app.use("/api/product",productRoutes)
app.use("/api/orders",orderRoutes)
app.use("/api/address",addressRoutes)
app.use("/api/checkout",paymentRoutes)



// connection to  database

mongoose.set("strictQuery",true);
mongoose.set('toJSON',{virtuals:true}); 
connectToDatabase();


app.listen(port,() => {
    console.log(`Server is running on PORT ${port}`)
})


