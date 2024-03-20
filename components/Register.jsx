import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    join_date: '',
    skills: '',
    contact: '',
    email: '',
    document: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      document: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
        const response = await axios.post('http://localhost:3001/staffs/addNew', formData);
        console.log(response.data);
    }catch(error){
        console.log('Error:',error);
    } 
  };

  return (
    <form onSubmit={handleSubmit} id='form'>

        <h1>Regiter</h1>

      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="course">Course:</label>
        <input type="text" id="course" name="course" value={formData.course} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="joinDate">Join Date:</label>
        <input type="date" id="joinDate" name="join_date" value={formData.join_date} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="skill">Skill:</label>
        <input type="text" id="skills" name="skills" value={formData.skills} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="contact">Contact:</label>
        <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="document">Document:</label>
        <input type="file" id="document" name="document" onChange={handleFileChange}  />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
