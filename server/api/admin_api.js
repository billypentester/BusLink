const express = require('express');
const { user, admin, bus, ticket, contact }  = require('../models/schema')
const router = express.Router()
require('dotenv').config()
const jwt = require("jsonwebtoken");
const auth  = require('../middleware/auth')

// admin actions

router.post('/admin/login', async(req, res) => {

    const { email, password, isadmin } = req.body;

    if(!email || !password || !isadmin){
        res.json({ msg: 'Incomplete login details' });
    }
    const find = await admin.findOne({ email: email, password: password })

    try{
        if(find){
           
            const token = jwt.sign(
                { email : find.email, isadmin },
                process.env.SECRET,
                {
                expiresIn: "1h",
                }
            );
    
            find.tokens = find.tokens.concat({ token : token });
            await find.save();

            res.cookie('token', token);

            res.redirect('/admin/panel/')

        }
        else{
            res.json({ msg: 'Invalid email or password' })
        }
    }
    catch(err){
        res.json({ msg: "Unexpected error occur. Try again...!" })
    }
    
})

router.get('/admin/logout',auth, async(req, res) => {
    res.clearCookie('token');
    res.json({ success : 1 })
})

// admin statistics

router.get('/admin/statistics',auth, async(req, res) => {

    const users = await user.find().count()
    const tickets = await ticket.find().count()
    const buses = await bus.find().count()
    const contacts = await contact.find().count()

    res.json({ users : users, tickets : tickets, buses : buses, contacts : contacts })

})

router.get('/admin/busstatus',auth, async(req, res) => {

    const available = await bus.find({ bus_status : 'Available' }).count()
    const unavailable = await bus.find({ bus_status : 'UnAvailable' }).count()

    res.json({ result : { available : available, unavailable : unavailable  } })

})
router.get('/admin/userperBus',auth, async(req, res) => {

    const buses = await bus.find().distinct("bus_name")

    const result =  await ticket.aggregate([
        {"$group" : {_id:"$bus_name", count:{$sum:1}}}
    ])

    res.json({ buses : buses, result : result })

})

router.get('/admin/userpercity', async(req, res) => {

    const result =  await user.aggregate([
        {"$group" : {_id:"$city", count:{$sum:1}}}
    ])

    res.json({ result : result })

})

// user CRUD

router.get('/user/all',auth, async(req, res) => {

    try{
        const result = await user.find()
        res.json(result)

    }catch(err){
        res.send('Error' + err)
    }

})

// bus CRUD

router.get('/bus/all',auth, async(req, res) => {
  
    try{
        const result = await bus.find()
        res.json(result)

    }catch(err){
        res.send('Error' + err)
    }
   
})

router.post('/bus/add',auth, async(req, res) => {
  
    const { bus_number, bus_name, bus_type, bus_seats, bus_price, bus_date, bus_time, bus_from, bus_to, bus_status } = req.body;

    const bus_data = new bus({
        bus_number: bus_number,
        bus_name: bus_name,
        bus_type: bus_type,
        bus_seats: bus_seats,
        bus_price: bus_price,
        bus_date: bus_date,
        bus_time: bus_time,
        bus_from: bus_from,
        bus_to: bus_to,
        bus_status: bus_status
    
    })

    try{

        const result = await bus_data.save()
        res.json({result})

    }
    catch(err){
        res.json({ msg : err })
    }

  
})

router.patch('/bus/update',auth, async(req, res) => {
  
    const id = req.params.id
    const { bus_number, bus_name, bus_type, bus_seats, bus_price, bus_date, bus_time, bus_from, bus_to, bus_status } = req.body;
  
    try{
        const result = await bus.findOneAndUpdate({ _id : id }, {
            first_name: first_name,
            last_name: last_name,
            city: city,
            email : email,
            password : password
        })
        res.json(result)
    }
    catch(err){
        res.send('Error' + err)
    }
   
   
})

router.post('/bus/delete',auth, async(req, res) => {
  
    const { id } = req.body
  
    try{
        const result = await bus.findOneAndDelete({ _id : id })
        res.json({ result })
    }
    catch(err){
        res.json({msg : "error occured"})
    }
   
})

// ticket CRUD

router.get('/ticket/all', async(req, res) => {
  
    try{
        const result = await ticket.find()
        res.json(result)

    }catch(err){
        res.send('Error' + err)
    }
   
})


router.get('/contact/all', async(req, res) => {
  
    try{
        const result = await contact.find()
        res.json(result)

    }catch(err){
        res.send('Error' + err)
    }
   
})

module.exports = router