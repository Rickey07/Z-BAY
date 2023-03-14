const mongoose = require('mongoose');

const connectToDatabase = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then((data) => {
        console.log(`MongoDB Connected with server: ${data.connection.host}`)
    })
    .catch((error) => console.log(error,"error is coming"))
}


module.exports = connectToDatabase;