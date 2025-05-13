import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorDashboard from "./pages/dashboard/DoctorDashboard";
import PatientDashboard from "./pages/dashboard/PatientDashboard";
import AppointmentBooking from "./pages/appointments/booking";
import { Provider } from "react-redux";
import { store } from "./store";
import AppRoutes from "./routes";
import Login from "./pages/auth/Login";

import './index.css'; // or './tailwind.css'


export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/doctor-dashboard" element={<DoctorDashboard/>} />
          <Route path="/patient-dashboard" element={<PatientDashboard/>} />
          <Route path="/login" element={<Login />} />
          
            </Routes>
        <div className="min-h-screen bg-background">
          
          <main className="container mx-auto px-4 py-8">
            <AppRoutes />
          </main>
        </div>
      </Router>
    </Provider>
  );
}
