const express = require('express');
const router = express.Router();
const User = require('./../models/User');

router.post('/', async (req, res) => {
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
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
         return res.status(400).send({ error: "User already exists with this email" });
      }
      if (password.length < 8 
         || password.length > 20 || !/[A-Z]/.test(password)  || !/[a-z]/.test(password) || !/[0-9]/.test(password)){
         return res.status(400).send({ error : "Password should be between 8 to 20 characters and must contain at least  one uppercase letter , one lowercase letter and one number"});
};

console.log("req.body", req.body);
const user = await User(req.body);
await user.save();
res.send('Hello World! from auth.js')
   }
   catch (err) {
   console.log("The error is  ", err);
}
   
})
module.exports = router;