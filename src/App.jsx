import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';



const App = () => {
  
  return (
    
    <Router>
     <div className="bg-indigo-400 h-screen p-4">
   
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
