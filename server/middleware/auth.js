const jwt = require("jsonwebtoken");
const { user, admin }  = require('../models/schema')
require('dotenv').config()

const verifyToken = async(req, res, next) => {

  const token = req.cookies.token 

  if (!token) {
    return res.json({ msg : "Authentication failed. Login please...!" })
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);

    if(decoded.isadmin)
    {
      const admindata = await admin.findOne({ email: decoded.email })
      req.user = admindata;
    }
    else
    {
      const userdata = await user.findOne({ email: decoded.email })
      req.user = userdata;
    }
    req.token = token;

  } 
  catch (err) {
    return res.json({ msg : "Invalid token. Login please...!" })
  }

  return next();
  
};    

module.exports = verifyToken;