import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Dashboard from "./Components/dashboard/dasboard"
import Login from "./Components/login/login"
import Demo from "./Demo";
import Signup from "./Components/signup/signup"
import Servicereq from "./Components/servicereq/servicereq"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
    <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route> 
      <Route path="/demo" element={<Demo />}></Route> 
      <Route path="/dashboard" element={<Dashboard />}></Route> 
      <Route path="/servicereq" element={<Servicereq />}></Route> 
      
      
    </Routes>
  </BrowserRouter>
   
    </>
    
  );
}

export default App;