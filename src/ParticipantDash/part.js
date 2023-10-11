// import logo from './logo.svg';
import './part.css';
import partSidebar from './components/PartSidebar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Employee from './Employee'
import Home from './components/Home'
import AddEmployee from './AddEmployee'
import ViewUserProfile from './ViewUserProfile'
import UpdateProfile from './components/UpdateProfile';


function part() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/Home" element={<Home/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default part;
