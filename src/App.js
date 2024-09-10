
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Sidebar from './components/header/sidebar/Sidebar';

function App() {
  return (
    <>
   <Topbar/>
  <Routes>
    <Route path='/' element={<Home/>}  />
    <Route path='/register' element={<Register/>}  />
    <Route path='/login' element={<Login/>}  />
    <Route path='/write' element={ <Write/>}  />
    <Route path='/settings' element={<Settings/>}  />
    <Route path='/post' element={ <Single/>}  />
    <Route path='/sidebar' element={ <Sidebar/>}  />


  </Routes>
    
   

    
    
    
    </>
  );
}

export default App;
