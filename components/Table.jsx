import React, { useState, useEffect } from "react";
import Menubar from "./Menubar";
import axios from "axios";
import "../styles/userdata.css";

const ReservationTable = () => {
  const [reservations, setReservations] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch data using Axios
    axios
      .get("http://localhost:3001/staffs/viewAll")
      .then((response) => {
        // Set the data in state
        setReservations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array means this effect will run once on mount

  const deleteRow = async (id) => {
    try {
      // Send delete request to backend
      await axios.post(`http://localhost:3001/staffs/delete/${id}`);
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
      <Menubar/>
    <h1>Staff's Data</h1>
    
    <table id="staffTable">
      <thead>
        <tr>
          
          <th>Name</th>

          <th>Course</th>
          <th>Join-date</th>
          <th>skill</th>
          <th>Contact</th>

          <th>Email</th>
          <th>Document</th>
          <th>Delete</th>
      
         
        </tr>
      </thead>
      <tbody>
        {reservations.map((staffs) => (
          <tr key={staffs.id}>
          
            <td>{staffs.name}</td>
            <td>{staffs.course}</td>
            <td>{staffs.join_date}</td>
            <td>{staffs.skills}</td>
            <td>{staffs.contact}</td>
            <td>{staffs.email}</td>
            <td>{staffs.document}</td>
            <td>
                <button onClick={() => deleteRow(staffs.id)} id="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="black" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default ReservationTable;
