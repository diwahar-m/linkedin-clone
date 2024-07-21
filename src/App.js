import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from "./Feed";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from "./Login";
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import {login, logout} from "./features/userSlice"
import { auth} from "./firebase"
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);
  // useselector function defines which part of the Redux store 
  // state we want.

  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth,(userAuth)=> {
      console.log(userAuth)
      if(userAuth){
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl
          })
        )
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  },[dispatch])
  


  
  return (
    <div className="app">
      {/* Header */}
      <Header />
      { !user ? <Login /> : (
         <div className='app__body'>
         <Sidebar />
         <Feed />
         <Widgets />
       </div>
    
  )}

      
     
      {/* Widgets */}
    </div>

  );
}

export default App;
