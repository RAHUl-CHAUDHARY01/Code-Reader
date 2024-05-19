import logo from "./logo.svg";
import "./App.css";
import react,{ useState } from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Boxes from "./components/Boxes";
import Particle from "./Particle";
import { createGlobalStyle, keyframes, styled } from 'styled-components';

function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }




  return (
    <div className="background" style={{background:"linear-gradient(#30142b, #a12727)"}}>
    <NoteState>
    

      <Router>
      <Navbar/>
      <Alert alert={alert}/>
        <div className="container"  >
            <Routes>
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login showAlert={showAlert}/>} />
            <Route path="/signup" element={<Signup showAlert={showAlert}/>} />
            <Route path="/boxes" element={<Boxes  />} />
            {/* <Route path="*" element={<NoMatch />} /> Catch-all route */}
            </Routes>
        </div>
      </Router>
      </NoteState>
    </div>
  );
}

export default App;
