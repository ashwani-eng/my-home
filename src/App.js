import './Component/Navbar.css'
import './App.css';

import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import MainBody from './Component/MainBody'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Reasons from './Component/Reasons'
import Footer from './Component/Footer'
import Login from './Component/Login';
import Signup from './Component/Signup';
import Group from './Component/Group';
import ScrollToTopButton from './Component/ScrollToTopButton';
import ForgotPassword from './Component/ForgotPassword';



function App() {
  return (<>
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<Group />} />

< Route element={<Login/>} path='/login'/>

<Route path="/over" element={<Sidebar />}></Route>
<Route path="/Rules" element={<MainBody />}></Route>
<Route path="/signup" element={<Signup />}></Route>
<Route path="/pass" element={<ForgotPassword />}></Route>

 </Routes>
 </BrowserRouter>
  </>
  );
}


export default App;
