const express = require('express')
const path = require('path')
const cookieparser = require('cookie-parser')
require('dotenv').config()
var app = express()
const port = process.env.PORT || 3000

// for server routes

const route = require('./routes/route')
const user = require('./api/user_api')
const bus = require('./api/bus_api')
const admin = require('./api/admin_api')

// path for static and dynamic web

const statweb = path.join(__dirname, "./public")

// middleware for encoding data while sending

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieparser())

// middleware for server routes

app.use(route)
app.use(user)
app.use(bus)
app.use(admin)

// for static web usage

app.use(express.static(statweb))

// listening on port

app.listen(port, ()=> {
    console.log(`Server is runing on port no : ${port}`)
})
