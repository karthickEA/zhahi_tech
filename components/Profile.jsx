import React, { useEffect, useState } from "react";
import axios from "axios";
// import Navbar from "./Navbar";
import '../styles/profile.css';

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [savedCodeSnippets, setSavedCodeSnippets] = useState([]);

  useEffect(() => {
    // Fetch user information
    axios.get("http://localhost:3001/user/viewData")
      .then(response => {
        setUserInfo(response.data);
      })
      .catch(error => {
        console.error("Error fetching user information:", error);
      });

    // Fetch saved code snippets
    axios.get("http://localhost:3001/code/viewData")
      .then(response => {
        setSavedCodeSnippets(response.data);
      })
      .catch(error => {
        console.error("Error fetching saved code snippets:", error);
      });
  }, []);

  return (
    
    <div>
        {/* <Navbar/> */}
      {userInfo && (
        <div>
          <h2>User Information</h2>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
        </div>
      )}

      <h2>Saved Code Snippets</h2>
      <ul>
        {savedCodeSnippets.map((snippet, index) => (
          <li key={index}>
            <h3>{snippet.language}</h3>
            <pre>{snippet.code}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;