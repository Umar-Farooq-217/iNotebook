
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import NotesState from './context/notes/NotesState';
import NoteContext from './context/notes/NoteContext';
function App() {
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e);
    
  }
  return (
     <NotesState>   
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container my-3">

            <h2>Add a Note</h2>

            <form onSubmit={handleSubmit}>

                {/* Title */}
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
                    />
                </div>

                {/* Description */}
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
                    ></textarea>
                </div>

                {/* Tag */}
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
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Add Note
                </button>

            </form>

        </div>
          

          <h1>Your Notes</h1>
          {

          }
          

          <Routes>
            <Route exact path='/' element={<app/>} />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NotesState> 
  );
}

export default App;
