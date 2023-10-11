import './Component/Navbar.css'
import './App.css';
import Sidebar from './Component/Sidebar';
import MainBody from './Component/MainBody'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Component/Login';
import Signup from './Component/Signup';
import Group from './Component/Group';
import ForgotPassword from './Component/ForgotPassword';
import Panelist from './Component/Panelist';
import Panelprofile from './Component/Panelprofile';
import Viewidea from './Component/Viewidea'
import Panelvideo from './Component/Panelvideo';
import Employee from './ParticipantDash/Employee';
import ViewUserProfile from './ParticipantDash/ViewUserProfile';
import AddEmployee from './ParticipantDash/AddEmployee';
import UpdateProfile from './ParticipantDash/components/UpdateProfile'
import PartSidebar from './ParticipantDash/components/PartSidebar'




function App() {
  return (<>
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<Group />} />

< Route element={<Login/>} path='/login'/>
<Route path='/panel' element={<Panelist />}><Route path="/panel/view" element={<Viewidea/>}></Route>
<Route path='/panel/panelpro' element={<Panelprofile />}></Route><Route path="/panel/panelvideo" element={<Panelvideo/>}></Route></Route>
<Route path="/over" element={<Sidebar />}></Route>
<Route path="/Rules" element={<MainBody />}></Route>
<Route path="/signup" element={<Signup />}></Route>
<Route path="/pass" element={<ForgotPassword />}></Route>
<Route path="/partside" element={<PartSidebar/>}><Route path="/partside/Employee" element={<Employee/>}></Route>
    <Route path="/partside/profile" element={<ViewUserProfile/>}></Route>
    </Route>
    <Route path="/create" element={<AddEmployee/>}></Route>
    <Route path="/update" element={<UpdateProfile/>}></Route>
 </Routes>
 </BrowserRouter>
  </>
  );
}


export default App;
