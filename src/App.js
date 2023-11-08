import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up'; // Corrected import
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page'; // Corrected import
import InstantConsultation from './Components/InstantConsultation/InstantConsultationBooking/InstantConsultation'
import FindDoctorSearch from './Components/FindDoctorSearchIC/FindDoctorSearchIC';
import DoctorBook from './Components/DoctorCardIC/DoctorCardIC';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/instant-consultation" element={<InstantConsultation/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/finddoctor' element={<FindDoctorSearch/>}/>
        <Route path="/search/doctors" element={<DoctorBook/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
