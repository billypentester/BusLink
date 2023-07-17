const express = require('express');
const { user, ticket, contact } = require('../models/schema')
const router = express.Router()
const auth = require("../middleware/auth");

// main pages

router.post('/contactus', async(req, res) => {

    const { name, email, message } = req.body

    const newcontact = new contact({
      name : name,
      email : email,
      message : message
    }) 

    try{
        const result = await newcontact.save()
        res.json({result})
    }
    catch(err)
    {
      res.json({ msg : err })
    }

})

// user panel

router.get('/user/panel/',auth, async(req, res) => {

    const user = req.user
    res.json({ user })

})

router.get('/user/panel/finder',auth, async(req, res) => {
  
  const user = req.user
  res.json({ user })

})

router.get('/user/panel/reserve',auth, async(req, res) => {
  
  const user = req.user
  res.json({ user })

})

router.get('/user/panel/tickets',auth, async(req, res) => {
  
  const user = req.user
  const tickets = await ticket.find({ email : user.email })
  res.json({ user, tickets })

})

router.get('/user/panel/update',auth, async(req, res) => {
  
  const user = req.user
  res.json({ user })

})

router.get('/user/panel/delete',auth, async(req, res) => {
  
  const user = req.user
  res.json({ user })

})

router.get('/user/panel/feadback',auth, async(req, res) => {
  
  const user = req.user
  res.json({ user })

})


// admin panel

router.get('/admin/panel/',auth, async(req, res) => {

  const admin = req.user
  console.log(admin)
  res.json({ admin })

})


module.exports = router
