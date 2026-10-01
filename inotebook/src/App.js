
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import NotesState from './context/notes/NotesState';
function App() {
  return (
     <NotesState>   
      <BrowserRouter>
        <div className="App">
          <Navbar />
          

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NotesState> 
  );
}

export default App;
