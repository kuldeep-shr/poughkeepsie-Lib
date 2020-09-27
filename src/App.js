import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.scss';
//import useDocumentScrollThrottled from './HOME/home';
import Homepage from './HOME/starter-files/home'
import './HOME/css/home.scss'
function App() {

  //let's create header default state

  const [defaultState, changeHeader] = useState('main-header')
  console.log('default value is..', defaultState)

  useEffect(() => {
    window.addEventListener('scroll', changeHeaderColor);
    

  },[]);

  function changeHeaderColor() {
    console.log(window.scrollY)
    if(window.scrollY > 98){
    changeHeader('show-header')
  }

  else{
    changeHeader('main-header')
  }
}





  return (
    // <div className='main-images'>
    
    <Homepage />
 /*   {/* <header className='main-nav'>
      <div className='main-logo'></div>
      <ul>
        <li>HOME</li>
        <li>LOG-IN</li>
        <li>ABOUT</li>
      </ul>
    </header>
      <img src="/home-images/img-1.jpg" /> */
      
  );
}

export default App;
