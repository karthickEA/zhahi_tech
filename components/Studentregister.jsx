import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Register.css';

function RegistrationForm() {
    const  Navigate =  useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        address: '',
        email: '',
        contact: '',
        batch: '',
        certification: '',
        github: '',
        linkedin: '',
        attendance: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you can handle form submission, like sending data to a server
        try{
            const response = await axios.post('http://localhost:3001/studentdatas/add', formData);
            console.log(response.data);
        }catch(error){
            console.log('Error:',error);
        } 
        console.log(formData);
    };

   
    const handleRefresh = () => {
        // Reset the form data to initial state
        setFormData({
            name: '',
            age: '',
            address: '',
            email: '',
            contact: '',
            batch: '',
            certification: '',
            github: '',
            linkedin: '',
            attendance: ''
        });
    };

    return (
        <div id="form">
            <h2>Student Register</h2>
            <form onSubmit={handleSubmit}>
            <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Contact:</label>
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
        </div>
        <div>
          <label>Batch:</label>
          <input type="text" name="batch" value={formData.batch} onChange={handleChange} />
        </div>
        <div>
          <label>Certification:</label>
          <input type="text" name="certification" value={formData.certification} onChange={handleChange} />
        </div>
        <div>
          <label>Github:</label>
          <input type="text" name="github" value={formData.github} onChange={handleChange} />
        </div>
        <div>
          <label>LinkedIn:</label>
          <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} />
        </div>
        <div>
          <label>Attendance:</label>
          <input type="text" name="attendance" value={formData.attendance} onChange={handleChange} />
        </div>
                <button type="submit"><svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" color="black" fill="currentColor" class="bi bi-file-earmark-arrow-up-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.354 9.854a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 8.707V12.5a.5.5 0 0 1-1 0V8.707z"/>
</svg></button>
                <button type="button" onClick={handleRefresh} id='Refresh'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="black" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg></button>
                <button type="button" onClick={() => Navigate('/student')}><svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" color="black" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg></button>
                
            </form>
        </div>
    );
}

export default RegistrationForm;
