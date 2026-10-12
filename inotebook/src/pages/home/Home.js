
import Notes from '../../components/notes/Notes';
import AddNote from '../../components/addNote/AddNote';

function Home() {
  

  

  return (
    <div className="container my-3">
     <AddNote/>
      <h1 className="my-3">Your Notes are Here</h1>

      <Notes/>
    </div>
  );
}

export default Home;