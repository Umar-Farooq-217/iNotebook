import React, { useState } from 'react';
import noteContext from './NotesContext';

const NotesState = (props) => {


    var initialState = [
        {
            "_id": "6aaf3f0d11dc42d1b0bf2003",
            "user": "6aaa3073ec14c4d49ffb7e36",
            "title": "my visiting plan ",
            "description": "where are you going",
            "tag": "personal",
            "date": "2026-09-20T02:03:57.697Z",
            "__v": 0
        },
        {
            "_id": "6aaf3f1111dc42d1b0bf2004",
            "user": "6aaa3073ec14c4d49ffb7e36",
            "title": "my visiting plan ",
            "description": "where are you going",
            "tag": "personal",
            "date": "2026-09-20T02:04:01.224Z",
            "__v": 0
        },
        {
            "_id": "6aaf3f1111dc42d1b0bf2005",
            "user": "6aaa3073ec14c4d49ffb7e36",
            "title": "my title is updated now ",
            "description": "where are you going",
            "tag": "personal",
            "date": "2026-09-20T02:04:01.960Z",
            "__v": 0
        },
        {
            "_id": "6abb5489198094f38f9971c3",
            "user": "6aaa3073ec14c4d49ffb7e36",
            "title": "my hj ",
            "description": "where  hj",
            "tag": "good",
            "date": "2026-09-29T06:02:49.586Z",
            "__v": 0
        },
        {
            "_id": "6abb548e198094f38f9971c4",
            "user": "6aaa3073ec14c4d49ffb7e36",
            "title": "my hjj ",
            "description": "where kh hj",
            "tag": "good",
            "date": "2026-09-29T06:02:54.927Z",
            "__v": 0
        },
        {
            "_id": "6abb5492198094f38f9971c5",
            "user": "6aaa3073ec14c4d49ffb7e36",
            "title": "myhj hjj ",
            "description": "wherek kh hj",
            "tag": "good",
            "date": "2026-09-29T06:02:58.742Z",
            "__v": 0
        },
        {
            "_id": "6abb5497198094f38f9971c6",
            "user": "6aaa3073ec14c4d49ffb7e36",
            "title": "myhjk hjj ",
            "description": "wherek hkh hj",
            "tag": "good",
            "date": "2026-09-29T06:03:03.071Z",
            "__v": 0
        }
    ];
    const [notes, setNotes] = useState(initialState);
    // Add a note
    const addNote = (title, description, tag) => {
    const  note = {
            "_id": "6abb5497198094f38f9971c6",
            "user": "6aaa3073ec14c4d49ffb7e36",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2026-09-29T06:03:03.071Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    };

    // Delete a note 
    const deleteNote = (id)=>{
     const newNote = notes.filter((note)=>{ return note._id !== id })
     setNotes(newNote);

    };
    // Edit a note 
    const editNote = ()=>{

    };
    return (
        <noteContext.Provider value={{ notes, setNotes, addNote , deleteNote , editNote }}>
            {props.children}
        </noteContext.Provider>
    );
};

export default NotesState;