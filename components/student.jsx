import React, { useState, useEffect } from "react";
import {  useNavigate } from 'react-router-dom';
import Menubar from "./Menubar";
import axios from "axios";
import "../styles/userdata.css";

function Studentdata() {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(true);
  const  Navigate =  useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3001/studentdatas/view");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterDataByBatch = (batch) => {
    return data.filter((studentdatas) => studentdatas.batch === batch);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const filteredData = selectedOption ? filterDataByBatch(selectedOption) : data;

  
  const deleteRow = async (id) => {
    try {
      // Send delete request to backend
      await axios.post(`http://localhost:3001/studentdatas/delete/${id}`);
      // Remove deleted row from state
      setData(data.filter(item => item.id !== id));

    } 
    catch (error) {
      console.error('Error deleting row:', error);
    }
    alert(" user data removed successfully ");
  };

  return (
    <div id="show">
      <Menubar />
      <h1>Alumini Student Data's</h1>

      {/* Dropdown list button */}
      <select
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">All</option>
        <option value="morning">Morning </option>
        <option value="evening">Evening </option>
      </select>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Batch</th>
                <th>Certificate </th>
                <th>Github</th>
                <th>Linkedin</th>
                <th>Attendance</th>
                <th>Delete</th>
               
              </tr>
            </thead>
            <tbody>
              {filteredData.map((studentdatas) => (
                <tr key={studentdatas.id}>
                  <td>{studentdatas.name}</td>
                  <td>{studentdatas.age}</td>
                  <td>{studentdatas.address}</td>
                  <td>{studentdatas.email}</td>
                  <td>{studentdatas.contact}</td>
                  <td>{studentdatas.batch}</td>
                  <td>{studentdatas.certification}</td>
                  <td>{studentdatas.github}</td>
                  <td>{studentdatas.linkedin}</td>
                  <td>{studentdatas.attendance}</td>
                  <td>
                  <button onClick={() => deleteRow(studentdatas.id)} id="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="black" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></button>
              </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={() => Navigate('/Studentregister')}id="updateButton"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="black" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
</svg></button>
          
        </>
      )}
    </div>
  );
}

export default Studentdata;
