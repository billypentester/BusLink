const mongoose = require('mongoose')
const conn = require('../db/conn')

const userschema = new mongoose.Schema({
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String
    },
    city : String,
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : String,
    contactno : String,
    tokens: [
        {
            token:{
                type: String,
                required: true
            }
        }
    ],
    feadbacks: [
        {
            msg:{
                type: String
            },
            date : {
                type: Date,
                default: Date.now
            }
        }
    ]
})

const busschema = new mongoose.Schema({
    bus_number : {
        type : String,
        required : true
    },
    bus_name : {
        type : String,
        required : true
    },
    bus_seats : {
        type : Number,
        required : true
    },
    bus_price : {
        type : Number,
        required : true
    },
    bus_date : {
        type : Date,
        required : true
    },
    bus_time : {
        type : String,
        required : true
    },
    bus_from : {
        type : String,
        required : true
    },
    bus_to : {
        type : String,
        required : true
    },
    bus_status : {
        type : String,
        required : true
    }
})

const ticketchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
    },
    bus_number : {
        type : String,
        required : true
    },
    bus_name : {
        type : String,
        required : true
    },
    bus_price : {
        type : Number,
        required : true
    },
    bus_date : {
        type : Date,
        required : true
    },
    bus_time : {
        type : String,
        required : true
    },
    bus_from : {
        type : String,
        required : true
    },
    bus_to : {
        type : String,
        required : true
    },
    noofticket : String,
    bus_arr : [String]
})

const contactschema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
    },
    message : String
})

const adminschema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    tokens: [
        {
            token:{
                type: String,
                required: true
            }
        }
    ]
})


// create collections

const user = new mongoose.model('user',userschema);
const bus = new mongoose.model('bus',busschema);
const ticket = new mongoose.model('ticket',ticketchema);
const contact = new mongoose.model('contact',contactschema);
const admin = new mongoose.model('admin',adminschema)

module.exports = { user, bus, ticket, contact, admin }