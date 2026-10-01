import { useContext } from "react";
import noteContext from "../../context/notes/NotesContext";
function About() {
  let note = useContext(noteContext);

  return (
    <div>
      <h1>This is About page</h1>

      <p>{note.name}</p>
      <p>{note.class}</p>
    </div>
  );
}

export default About;