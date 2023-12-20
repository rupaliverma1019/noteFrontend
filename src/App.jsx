import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
//import About from "./Component/About";
import NoteState from './ContextApi/Notes/NoteStateNew';
import Login from './Component/Login';
import Signup from './Component/Signup';



function App() {
  return (
    <NoteState>
    <Router>
      <Navbar />
      
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About/>}></Route> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
    </Router>
    </NoteState>
  );
}

export default App;
