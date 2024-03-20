import React from 'react';
import Menubar from './Menubar';
import "../styles/index.css";

const Home = () => {
  return (
    <div>
      <>
      <Menubar/>
      </>
        <header id='header'>
          <h1>Zhahi Tech Training</h1>
         <p>Your career guide</p> 
        </header>
    </div>
  );
};

export default Home;
