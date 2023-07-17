const express = require('express');
const { bus, ticket, user, contact } = require('../models/schema')
const router = express.Router()
const auth = require('./../middleware/auth')



router.post('/bus/search', async(req, res) => {

    const { bus_from, bus_to, search } = req.body
  
    try{

        const result = await bus.find({ bus_from: bus_from, bus_to: bus_to })

        if(!bus_from || !bus_to)
        {
            res.json({ msg : "Values cannot be empty"})
        }
        else if(bus_from == bus_to){
            res.json({ msg : "Routes for same cities is not available" })
        }
        else if(result)
        {
            if(result[0].bus_status == 'UnAvailable')
            {
                res.json({ msg : "All seats are reserved" })
            }
            else
            {
                res.json({ result })
            }
        }
        else
        {
            res.json({ msg : "Route is not available" })
        }

    }catch(err){
        res.json({ msg : "Route is not available" })
    }
   
})

router.get('/bus/reserve/', async(req, res) => {

    const name = req.query.name
    const from =  req.query.from
    const to  = req.query.to

    res.json({ name : name, from: from, to: to })
   
})

router.post('/bus/booked/',auth, async(req, res) => {

    const { from, to, number } = req.body
    const user = req.user
    const fullname = user.first_name +  " " + user.last_name

    console.log(req.body)

    try{

        const busresult = await bus.findOne({ bus_from : from, bus_to : to }) 

        if(busresult)
        {

                if(busresult.bus_seats >= number)
                {
                    await bus.findOneAndUpdate({ _id : busresult.id },{
                        bus_seats : busresult.bus_seats - number
                    })
            
                    const getbus = await bus.find({ _id : busresult.id })
        
                    if(getbus[0].bus_seats == 0)
                    {
                        await bus.findOneAndUpdate({ _id : busresult.id },{
                            bus_status : 'UnAvailable'
                        })
                    }
            
                    var total_price = number * getbus[0].bus_price;
            
                    const ticket_data = new ticket({
                        name : fullname,
                        email : user.email,
                        bus_number: busresult.bus_number,
                        bus_name: busresult.bus_name,
                        bus_price: total_price,
                        bus_date: busresult.bus_date,
                        bus_time: busresult.bus_time,
                        bus_from: busresult.bus_from,
                        bus_to: busresult.bus_to,
                        noofticket: number
                    })
    
                    console.log(ticket_data)
            
                    const result = await ticket_data.save()
    
    
                    console.log(result)
    
                    res.redirect('/user/panel/tickets')
                }
                else
                {
                    res.json({ msg : `Maximum available seats are : ${busresult.bus_seats}` })
                }

                

        }
        else
        {
            res.json({ msg : "Wrong Inputs are given." })
        }
  
    }
    catch(err){
        res.json({ msg : "Error occured! Try again..." })
    }
   
})

router.get('/bus/cancel/:busno',auth, async(req, res) => {
    
    const bus_no = req.params.busno
    const user =  req.user
    
    try{
        const results = await ticket.findOneAndDelete({ bus_number : bus_no, email : user.email })
        const bus_data = await bus.findOne({ bus_number : bus_no })

        await bus.findOneAndUpdate({ bus_number : results.bus_number },{
            bus_seats : bus_data.bus_seats + results.noofticket
        })

        const bdata = await bus.findOne({ bus_number : bus_no })

        if(bdata.bus_seats > 0)
        {
            await bus.findOneAndUpdate({ bus_number : bus_no },{
                bus_status : 'Available'
            })
        }
        
        res.redirect('/user/panel/tickets')
    }
    catch(err)
    {
        res.json({ error : "error occured" })
    }

})


module.exports = router



