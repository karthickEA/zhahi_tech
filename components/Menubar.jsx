import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menubar.css';

const MenuBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/student">Alumini</Link>
        </li>
        <li>
          <Link to="/studentadmission">Students</Link>
        </li>
        <li>
          <Link to="/staff">Staff</Link>
        </li>
        <li>
          <a href="https://docs.google.com/spreadsheets/d/1E94G7mk8r1H1GjML2l_H8PuZlKMZi_im7FAWFLTW0ao/edit?usp=sharing">Attendance</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
