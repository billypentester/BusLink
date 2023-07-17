const mongoose = require('mongoose')
require('dotenv').config()

const db = 'mongodb://0.0.0.0:27017/bus-management'

mongoose.connect(db, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then ( ()=> console.log("Database connection successful........") )
.catch ( (err)=> console.log("Database connection not successful : \n" + err))

var conn = mongoose.connection;

module.exports = conn;