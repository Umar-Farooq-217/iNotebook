
import { Link, useLocation, useNavigate } from 'react-router-dom';


function Navbar() {
  // useLocation is a hook that returns the location object that represents the current URL. We can use this to get the 
  // current path and highlight the active link in th navbar
  let location = useLocation();

  let navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">iNotebook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
            </li>


          </ul>
          {
            !localStorage.getItem('token') ? <form className="d-flex" role="search">
              <Link className="btn btn-primary mx-1" type="button" to="/login">Sign In</Link>
              <Link className="btn btn-primary mx-1" type="button" to="/signup">Sign Up</Link>
            </form>
              : <button className="btn btn-primary" onClick={logoutHandler}>Logout</button>
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
