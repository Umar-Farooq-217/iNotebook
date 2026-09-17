const express = require('express');
const router = express.Router();
const User = require('./../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jt = process.env.JWT_SECRET;
const fetchuser = require('../middleware/fetchuser');
// Route : 1
router.post('/createUser', async (req, res) => {
   try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
         return res.status(400).send({ error: "Please fill all the fields" });
      }
      if (name.length < 3 || name.length > 20) {
         return res.status(400).send({ error: "Name should be between 3 to 20 characters" });
      }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
         return res.status(400).send({ error: "Please enter a valid email address" });
      }


      if (password.length < 8
         || password.length > 20 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
         return res.status(400).send({ error: "Password should be between 8 to 20 characters and must contain at least  one uppercase letter , one lowercase letter and one number" });
      };
      // Check i the user already exists
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
         return res.status(400).send({ error: "User already exists with this email" });
      }
      // Create a new user
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(password, salt);

      console.log("req.body", req.body);
      const user = await User({
         name : name,
         email : email,
         password : secPass
      });
      await user.save();
      const data = {
         user : {
            id : user.id
         }
      }
      const authtoken = jwt.sign(data , jt);
      res.json({authtoken})
   }
   catch (err) {
      console.log("The error is  ", err);
   }

})

//Route : 2  Authencticate a user using , post "/api/auth/login" no login is required 
router.post('/login',async (req , res) => {
   try {
      const { email , password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
         return res.status(400).send({ error: "Please enter a valid email address" });
      }


      if (password.length < 8
         || password.length > 20 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
         return res.status(400).send({ error: "Password should be between 8 to 20 characters and must contain at least  one uppercase letter , one lowercase letter and one number" });
      };
      // Check i the user already exists
      const existingUser = await User.findOne({ email: email });
      if (!existingUser) {
         return res.status(400).send({ error: "Please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password , existingUser.password);
      if(!passwordCompare){
         return res.status(400).send({error : "Please try to login with corrct credentials"})
      }
      const data = {
         user : {
            id : existingUser.id
         }
      }
      const authtoken = jwt.sign(data , jt);
      res.json({authtoken});


      
   } catch (error) {
      console.log('The error in /login , ' , error);
      res.status(500).send({ error : "internal server error"})
   }
})
// Route : 3 Get loggedin user details "/api/auth/getuser" . Login Required
router.post('/getuser',fetchuser, async(req , res)=>{
   try {
       userId = req.user.id ;
      const user = await User.findById(userId).select("-password"); // .select("-password") means don't fetch password
      res.send(user)
   }catch (error) {
      console.log('The error in /getUser , ' , error);
      res.status(500).send({ error : "internal server error"})
   }
})


module.exports = router;