import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/userdata.css";
import Menubar from './Menubar';

function Studentadmission() {
  var [data, setData] = useState([]);
  const  Navigate =  useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admission/view');
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error, display a message to the user, retry the request, etc.
    }
  };
  

  const deleteRow = async (id)=>{
    try {
      // Send delete request to backend
      await axios.post(`http://localhost:3001/admission/delete/${id}`);
      // Remove deleted row from state
      setData(data.filter(item => item.id!== id));
    } 
    catch (error) {
      console.error('Error deleting row:', error);
    }
  }

  const editRow = async (id) => {
    try{
      localStorage.setItem("idval",id); 
    Navigate('/Update');
    }
    catch (error) {
      console.error('Error update row:', error);
    }
  }


  return (
    <div id="show">
      <Menubar/>
      <h1>New Student Data's</h1>

      <button onClick={() => Navigate('/AdmissionForm')}id="updateButton"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="black" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
</svg></button>

      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>Institution</th>
            <th>Education</th>
            <th>CompletionYear</th>
            <th>Address</th>
            <th>Doj</th>
            <th>Course</th>
            <th>Document</th>
            <th>Documentstatus</th>
            <th>Experience</th>
            <th>Role</th>
            <th>CompanyName</th>
            <th>Years</th>
            <th>communication</th> 
            <th>placement</th>
            <th>Placed at</th>
            <th>job role</th>
            <th>salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td>
                <img
                  src={e.photo}
                  alt={`${e.name}`}
                  style={{ width: "50px", borderRadius: "50%" }}
                />
              </td>
              <td>{e.name}</td>
              <td>{e.dob}</td>
              <td>{e.mobile}</td>
              <td>{e.email}</td>
              <td>{e.institution}</td>
              <td>{e.education}</td>
              <td>{e.completion_year}</td>
              <td>{e.address}</td>
              <td>{e.doj}</td>
              <td>{e.course}</td>
              <td>{e.document}</td>
              <td>{e.documentstatus}</td>
              <td>{e.experience}</td>
              <td>{e.role}</td>
              <td>{e.company_name}</td>
              <td>{e.years}</td>
              <td>{e.communication}</td>
              <td>{e.placement}</td>
              <td>{e.placement_compenyname}</td>
              <td>{e.placement_role}</td>
              <td>{e.salary}</td>
                   
              <td>

                <button onClick={() => deleteRow(e.id)} id="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" width="16" color="black" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></button>

                <button onClick={() => editRow(e.id)} id="edit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="black" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
</svg></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default Studentadmission;

