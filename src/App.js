import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

//COMPONENTS
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';

//VIEWS
import Dashboard from './views/Dashboard/Dashboard';

//INSTALAR MATERIAL UI

function App() {
  return (
    <Router>
      <div className="appGrid">
        <NavBar className='gridOne'/>
        <SideBar className='gridTwo'/>
        <Routes>
          <Route path='/' element={<Dashboard className='gridThree'/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
