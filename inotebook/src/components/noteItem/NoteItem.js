import { useContext } from "react";
import NotesContext from "../../context/notes/NotesContext";


function NoteItem(props) {
    const context = useContext(NotesContext);
    const { deleteNote} = context;
    const { note } = props;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">
                        {props.note.title}
                    </h5>

                    <p className="card-text">
                        {props.note.description}
                    </p>

                    <button className="btn btn-primary me-2">
                        Update
                    </button>

                    <button className="btn btn-danger  " onClick={() =>{ return deleteNote(note._id)}}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NoteItem;