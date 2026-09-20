const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Notes = require('../models/Notes')

// Route:1 Fetch all notes using GET "/api/notes/fetchallnotes" , Login required
router.get('/fetchallnotes',fetchuser , async (req , res )=>{
    try {
         const notes = await Notes.find({ user : req.user.id});
    res.json(notes);
    } catch (error) {
        return res.status(500).send("Internal Server Error")
    }
     
})
// Route:2 post new notes using "/api/notes/addnote" , Login required
router.post('/addnote' ,fetchuser, async(req ,res )=>{
    try {
       const {title , description , tag } = req.body;
    if(!title && !description && !tag){
        return res.status(500).send( "Add all fields")
    }
    if(!title.length > 5 && !description.length > 5 && !tag.length > 3){
        return res.status(500).send("title length > 5 && description length > 5 && tag length > 3")
    }
    const note = new Notes({
        title , description , tag , user : req.user.id
    })
    const savedNote = await note.save();
    res.json(savedNote)  
    } catch (error) {
        return res.status(500).send("Internal Server Error")
    }
   
})
module.exports = router;