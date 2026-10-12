import React, { useContext, useState } from 'react'
import NotesContext from '../../context/notes/NotesContext'
function AddNote() {
    const context = useContext(NotesContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: '', description: '', tag: '' });
    const handleSubmit = (e) => {
        e.preventDefault();

          if (
        !note.title.trim() ||
        !note.description.trim() ||
        !note.tag.trim()
    ) {
        alert('Please fill in all fields');
        return;
    }

        addNote(note.title, note.description, note.tag);

        setNote({
            title: '',
            description: '',
            tag: ''
        });
    };
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className=" my-3">
            <h2>Add a Note</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label fw-bold">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        placeholder="Enter note title"
                        onChange={onChange}
                        value={note.title}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label fw-bold">
                        Description
                    </label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows="4"
                        placeholder="Enter note description"
                        onChange={onChange}
                        value={note.description}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="tag" className="form-label fw-bold">
                        Tag
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="tag"
                        name="tag"
                        placeholder="Enter tag"
                        onChange={onChange}
                        value={note.tag}
                    />
                </div>

                <button type="submit" className="btn btn-primary" >
                    Add Note
                </button>
            </form>

        </div>
    )
}

export default AddNote