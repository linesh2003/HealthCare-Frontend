import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
//import Dashboard from "../pages/dashboard";
import PatientDashboard from "../pages/dashboard/PatientDashboard";
import DoctorDashboard from "../pages/dashboard/DoctorDashboard";
import ProtectedRoute from "./protected-route";
import AppointmentBooking from "../pages/appointments/booking";
import DoctorList from "../pages/appointments/doctor-list";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard/patient"
        element={
          
            <PatientDashboard />
          
        }
      />
      <Route
        path="/dashboard/doctor"
        element={
          
            <DoctorDashboard />
         
        }
      />
      <Route
        path="/appointments"
        element={
          
            <DoctorList />
          
        }
      />
      <Route
        path="/appointments/book/:doctorId"
        element={
          
            <AppointmentBooking />
          
        }
      />
      <Route path="/" element={<Navigate to="/dashboard/patient" replace />} />
    </Routes>
  );
}
