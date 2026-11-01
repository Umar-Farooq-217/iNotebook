import React, { useState } from 'react';
import noteContext from './NotesContext';
import { toast } from 'react-hot-toast'
const NotesState = (props) => {


    var initialState = []
    const [notes, setNotes] = useState(initialState);
     // GET all note
    const getNotes =async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            
        })
        const json = await response.json();
        setNotes(json);
        
       
    };
    // Add a note
    const addNote =async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })
        // Logic to add in client side
        const note = await response.json();

        
        setNotes(notes.concat(note));
    };
 

    // Delete a note 
    const deleteNote =  async(id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        console.log(json);
        toast.success("Note deleted successfully!");
        
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote);

    };
    // Edit a note 
    const host = "http://localhost:5000";
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })
        const json = await response.json();

        // Logic to edit in client side
        for (let i = 0; i < notes.length; i++) {
            const element = notes[i];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }
    };
    return (
        <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </noteContext.Provider>
    );
};

export default NotesState;