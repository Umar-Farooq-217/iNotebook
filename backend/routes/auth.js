const express = require('express');
const router = express.Router();

router.post('/', (req , res )=>{
   console.log("req.body", req.body);
   res.send('Hello World! from auth.js' )
})
module.exports = router;