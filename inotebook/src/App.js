import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotesState from './context/notes/NotesState';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';


function App() {
  return (
    <NotesState>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
             <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NotesState>
  );
}

export default App;