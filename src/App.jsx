
import './App.css'
import { Route, Router,Routes } from 'react-router-dom';
import React from 'react';
import { useState } from 'react'
import Homepage from './pages/Homepage.jsx';

function App() {
  
 const [count,setCount]=useState(0);
  return (
    <>
    
     <Homepage/>
   
    </>  
  )
}

export default App
