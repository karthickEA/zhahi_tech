import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firebase from 'firebase/compat/app'; // Update import statement for firebase
import 'firebase/compat/storage'; // Update import statement for storage
import "../styles/Admission_form.css";

const firebaseConfig = {
  apiKey: "AIzaSyAp70NZYDKUO0p3neh2tT2k_rMOO4tMd4A",
  authDomain: "codepurple-8baa6.firebaseapp.com",
  projectId: "codepurple-8baa6",
  storageBucket: "codepurple-8baa6.appspot.com",
  messagingSenderId: "475627789665",
  appId: "1:475627789665:web:eabf5ece90aaedfd0cb920",
  measurementId: "G-V5JNRXCP56",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

function Update() {
  const [formData, setFormData] = useState({
    photo: '',
    name: '',
    dob: '',
    mobile: '',
    email: '',
    institution: '',
    education: '',
    completionYear: '',
    address: '',
    doj: '',
    course: '',
    document: '',
    documentStatus: '',
    experience: '',
    role: '', // New state for role
    companyname: '', // New state for company name
    yearsOfExperience: '' ,// New state for years of experience
    communication:"",
    placement:'',
    placementcompanyname: '',
    placementrole: '', // New state for placement
    salary: '' // New state for
  });

  useEffect(() => {
    const id = localStorage.getItem("idval");
    const fetchData = async () => {
      try {
        if (id) {
          const response = await axios.get(`http://localhost:3001/admission/viewById/${id}`);
          const { data } = response;
          setFormData(data); 
          
        } else {
          console.log("No ID found in local storage");
        }
      } catch (error) {
        console.log('Error fetching admission data by ID:', error);
      }
    };

    fetchData();
  }, []);


  const handleChange = (e) => {
    if (e.target.name === 'photo') {
      // If the change is for the photo, handle file upload
      const file = e.target.files[0];
      setFormData(prevState => ({
        ...prevState,
        photo: file
      }));
    } else {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(formData.photo.name);
      await fileRef.put(formData.photo);
      const photoURL = await fileRef.getDownloadURL();
      setFormData(prevState => ({
        ...prevState,
        photo: photoURL
      }));

      const id = localStorage.getItem("idval");
      if (id) {
        const response = await axios.put(`http://localhost:3001/admission/editById/${id}`, formData);
        console.log(response);
        console.log("Data updated successfully!");
      } else {
        const response = await axios.post(`http://localhost:3001/admission/add`, formData);
        console.log(response);
        console.log("Data added successfully!");
      }
    } catch(error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
          <form onSubmit={handleSubmit} id="form">
          <h2>Update Form</h2>
          <label htmlFor="photo">Photo:</label>
          <input type="file" id="photo" name="photo" onChange={handleChange} value={formData.photo}/>
    
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} required />
    
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" onChange={handleChange} value={formData.dob} required />
    
          <label htmlFor="mobile">Mobile No:</label>
          <input type="text" id="mobile" name="mobile" onChange={handleChange} value={formData.mobile} required />
    
          <label htmlFor="email">Email ID:</label>
          <input type="email" id="email" name="email" onChange={handleChange}   required />
    
          <label htmlFor="institution">College/School Name:</label>
          <input type="text" id="institution" name="institution" onChange={handleChange}  required />
    
          <label htmlFor="education">Education Qualification:</label>
          <input type="text" id="education" name="education" onChange={handleChange}  required />
    
          <label htmlFor="completionYear">Year of Completion:</label>
          <input type="text" id="completionYear" name="completionYear" onChange={handleChange}  required />
    
          <label htmlFor="address">Address:</label>
          <textarea id="address" name="address" onChange={handleChange}  required />
    
          <label htmlFor="doj">Date of Join:</label>
          <input type="date" id="doj" name="doj" onChange={handleChange}  required />
    
          <label htmlFor="course">Course:</label>
          <input type="text" id="course" name="course" onChange={handleChange}  required />
    
          <label htmlFor="document">Document:</label>
          <input type="file" id="document" name="document" onChange={handleChange}   />
    
          <fieldset>
            <legend>Document Status:</legend>
            <label>
              <input type="radio" name="documentStatus" value="Completed" onChange={handleChange}  />
              Completed
            </label>
            <label>
              <input type="radio" name="documentStatus" value="Pending" onChange={handleChange}  />
              Pending
            </label>
          </fieldset>
    
          <fieldset>
            <legend>Do you have prior experience?</legend>
            <label>
              <input type="radio" name="experience" value="Yes" onChange={handleChange} />
              Yes
            </label>
            <label>
              <input type="radio" name="experience" value="No" onChange={handleChange}  />
              No
            </label>
          </fieldset>
    
          {formData.experience === 'Yes' && ( // Conditionally render if hasExperience is 'Yes'
            <>
              
              <label htmlFor="companyName">Company Name:</label>
              <input type="text" id="companyName" name="companyName" onChange={handleChange}  required />
    
              <label htmlFor="role">Role:</label>
              <input type="text" id="role" name="role" onChange={handleChange} value={formData.role} required />
    
              <label htmlFor="yearsOfExperience">Years of Experience:</label>
              <input type="text" id="yearsOfExperience" name="yearsOfExperience" onChange={handleChange}  required />
            </>
          )}
    
          <fieldset>
            <legend>Do you want communication class?</legend>
            <label>
              <input type="radio" name="communication" value="Yes" onChange={handleChange} />
              Yes
            </label>
            <label>
              <input type="radio" name="communication" value="No" onChange={handleChange} />
              No
            </label>
          </fieldset>
    
          <fieldset>
            <legend>Placement Status :</legend>
            <label>
              <input type="radio" name="placement" value="Yes" onChange={handleChange} />
              Yes
            </label>
            <label>
              <input type="radio" name="placement" value="No" onChange={handleChange} />
              No
            </label>
          </fieldset>
    
          {formData.placement === 'Yes' && ( // Conditionally render if hasExperience is 'Yes'
            <>
              
              <label htmlFor="companyName">Company Name:</label>
              <input type="text" id="placementcompanyName" name="placementcompanyName" onChange={handleChange}  required />
    
              <label htmlFor="role">Role:</label>
              <input type="text" id="placementrole" name="placementrole" onChange={handleChange}  required />
    
    
              <label htmlFor="salary">Salary:</label>
              <input type="text" id="salary" name="salary" onChange={handleChange} value={formData.salary} required />
            </>
          )}
    
          <button type="submit" onChange={handleSubmit}>Submit</button>
        </form>
        
      
    </>
   
  );
}

export default Update;