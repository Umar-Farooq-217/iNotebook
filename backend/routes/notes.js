const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Notes = require('../models/Notes')
router.get('/fetchallnotes',fetchuser , async (req , res )=>{
    // Route:1 Fetch all notes using GET "/api/notes/fetchallnotes"
    const notes = await Notes.find({ user : req.user.id});
    res.json(notes);




   
})
module.exports = router;