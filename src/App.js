import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from "./Feed";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from "./Login";

function App() {

  const user = useSelector(selectUser);
  // useselector function defines which part of the Redux store 
  // state we want.
  


  
  return (
    <div className="app">
      {/* Header */}
      <Header />
      { !user ? <Login /> : (
         <div className='app__body'>
         <Sidebar />
         <Feed />
       </div>
    
  )}

      
     
      {/* Widgets */}
    </div>

  );
}

export default App;
