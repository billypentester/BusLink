const express = require('express');
const { user, ticket, bus }  = require('../models/schema')
const router = express.Router()
require('dotenv').config()
const jwt = require("jsonwebtoken");
const auth  = require('../middleware/auth')

// user actions
  
router.post('/user/register', async(req, res) => {
  
    const { firstname, lastname, city, email, password, confirmpassword } = req.body;

    const user_data = new user({
        first_name: firstname,
        last_name: lastname,
        city: city,
        email : email,
        password : password
    })   

    const find_email = await user.findOne({ email: email })

    if(find_email){
        res.json({ msg: 'email already exists' });
    }
    else if(password !== confirmpassword)
    {
        res.json({ msg: 'password and confirm password does not match' });
    }
    else 
    {
        try{

            const token = jwt.sign(
                { email: email },
               process.env.SECRET,
                {
                  expiresIn: "1h",
                });
        
            user_data.tokens = user_data.tokens.concat({ token : token })

            res.cookie('token', token);

            const result = await user_data.save()

            res.json({ success: 'Registered Successfully. Please login...!' });

        }
        catch(err){
            res.json({ msg : "Unexpected error occur. Try Again...!"})
        }
    }
})

router.post('/user/login', async(req, res) => {

    const { email, password } = req.body;

    if(!email || !password){
        res.json({ msg: 'Incomplete login details' });
    }
  
    const find = await user.findOne({ email : email, password : password })
  
    try{
        if(find){
           
            const token = jwt.sign(
                { email: email },
                process.env.SECRET,
                {
                expiresIn: "1h",
                }
            );
    
            find.tokens = find.tokens.concat({ token : token });
            await find.save();

            res.cookie('token', token);

            res.redirect('/user/panel/')

        }
        else{
            res.json({ msg: 'Invalid email or password' })
        }
    }
    catch(err){
        res.json({ msg: "Unexpected error occur. Try again...!" })
    }
    
})

router.post('/user/update/:id',auth, async(req, res) => {
  
    const id = req.params.id
    const { first_name, last_name, city, email, password, contactno } = req.body;

    console.log(req.body)
  
    try{
        const result = await user.findOneAndUpdate({ _id : id }, {
            first_name: first_name,
            last_name: last_name,
            city: city,
            email : email,
            password : password,
            contactno : contactno
        })
        res.redirect('/user/panel/update')
    }
    catch(err){
        res.send('Error' + err)
    }
   
   
})

router.post('/user/delete/:id',auth, async(req, res) => {
  
    const id = req.params.id

    const find = await user.findOne({ _id: id })

    if(find.password === req.body.password)
    {
        try{
            const result = await user.findOneAndDelete({ _id : id })
            res.redirect('/user/logout')
        }
        catch(err){
            res.send('Error' + err)
        }

    }
    else{
        res.json({msg : "password doesnot match"})
    }  
    
})

router.post('/user/feadback',auth, async(req, res) => {
    const user = req.user
    const msg = req.body.msg
  
    try{
        user.feadbacks = user.feadbacks.concat({ msg : msg })
        await user.save()
        res.json({ user })
    }
    catch(err)
    {
        res.send('Error' + err)
    }
})

router.get('/user/logout',auth, async(req, res) => {
    res.clearCookie('token');
    res.json({ success : 1 })
})

router.get('/user/stat',auth, async(req,res)=> {

    const user = req.user

    try{
        const tickets = await ticket.find({ email: user.email }).count()
        const buses  = await bus.find({bus_status : 'Available'}).count()
        res.json({stat:{ticket: tickets, feadbacks: user.feadbacks.length, buses : buses }})
    }
    catch(err){
        res.json({ msg : "error occur" })
    }

})



module.exports = router