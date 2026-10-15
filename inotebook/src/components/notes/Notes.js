import React, { useContext, useEffect } from 'react';
import NotesContext from '../../context/notes/NotesContext';
import NoteItem from '../noteItem/NoteItem';

function Notes() {
    const context = useContext(NotesContext);
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes();
    }, []);

    return (
        <div className="row my-3">
            {notes.map((note) => {
                return (
                    <NoteItem key={note._id} note={note} />
                );
            })}
        </div>
    );
}

export default Notes;