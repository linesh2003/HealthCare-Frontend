import React from "react";
// import { StatsCard } from "./components/stats-card";
// import { AppointmentChart } from "./components/appointment-chart";
// import { AppointmentTable } from "./components/appointment-table";
import { StatsCard } from "../../components/stats-card";
import { AppointmentTable } from "../../components/appointment-table";
import DoctorHeader from "../../components/DoctorHeader";


const DoctorDashboard = () => {
  return (
    <>
    <DoctorHeader/>
    
    <div className="min-h-screen bg-background p-8">
      <h1 className="mb-8 text-2xl font-semibold">Doctor Dashboard</h1>
      
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Appointments"
          value="35"
          icon="lucide:calendar"
          color="primary"
        />
        <StatsCard
          title="Confirmed"
          value="24"
          icon="lucide:check-circle"
          color="success"
        />
        <StatsCard
          title="Pending"
          value="8"
          icon="lucide:clock"
          color="warning"
        />
        <StatsCard
          title="Cancelled"
          value="3"
          icon="lucide:x-circle"
          color="danger"
        />
      </div>


      <div>
        <AppointmentTable />
      </div>
    </div>
    </>
  );
}

export default DoctorDashboard;