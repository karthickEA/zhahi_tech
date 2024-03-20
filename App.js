import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "../src/components/Login";
import Home from "./components/Home";
import ReservationTable from "./components/Table";
import Studentdata from "./components/student";
import Studentregister from "./components/Studentregister"; 
import Register from "./components/Register";
import Studentadmission from "./components/Student_admission";
import AdmissionForm from "./components/Admission_form";
import Update from "./components/Update";

export default function App() {
  return (
    <BrowserRouter>
      
          <Routes>
            <Route  index element={<Login />}/>
            <Route path="Register" element={<Register/>}/>
            <Route path="home" element={<Home />} />
            <Route path="student" element={<Studentdata />} />
            <Route path="Studentregister" element={<Studentregister/>} />
            <Route path="staff" element={<ReservationTable/>} />
            <Route path="Studentadmission" element ={<Studentadmission/>}/>
            <Route path="Admissionform" element={<AdmissionForm />} />
            <Route path="Update" element={<Update />} />
          </Routes>
        
    </BrowserRouter>
  );
}

