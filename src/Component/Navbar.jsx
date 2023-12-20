import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
//import About from './About';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  let location = useLocation();

  useEffect(()=>{
    console.log(location.pathname)
  },[location]);


  return (

    
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">INoteBook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"? "active" : " "}`} aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"? "active" : " "}`} aria-current="page" to="/about">About</Link>
        </li> */}
        
       
      </ul>
      {!localStorage.getItem('token')?
      <form  className='d-flex'>
      <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
      </form> : <button onClick={handleLogout} className='btn btn-primary'>Logout</button> }
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar