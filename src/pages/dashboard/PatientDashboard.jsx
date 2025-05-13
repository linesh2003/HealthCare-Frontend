import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "@heroui/react";
import { Icon } from "@iconify/react";
import PatientHeader from "../../components/PatientHeader";
import PaymentDetails from "../appointments/payment-details";



export const PatientDashboard = () => {
const [recentActivities, setRecentActivities] = useState([]);
const addRecentActivity = (activity) => {
  setRecentActivities(prev => [...prev, { message: activity, timestamp: new Date() }]);
};

const handlePaymentSuccess = (paymentId, appointmentDetails) => {
  console.log("Payment successful with ID:", paymentId);
  console.log("Appointment details:", appointmentDetails);

  const message = 'Paid $100.00 for appointment'
addRecentActivity('Paid $100.00 (Payment ID: ${paymentId})');
};

  
  return (
    
    <>  
    <PatientHeader/>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Welcome</h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardBody className="flex items-center gap-4">
            <div className="rounded-lg bg-primary-100 p-3">
              <Icon icon="lucide:calendar" className="text-2xl text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Appointments</h2>
              <p className="text-sm text-default-500">View your schedule</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center gap-4">
            <div className="rounded-lg bg-success-100 p-3">
              <Icon icon="lucide:clock" className="text-2xl text-success" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Upcoming</h2>
              <p className="text-sm text-default-500">Next appointment</p>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex items-center gap-4">
            <div className="rounded-lg bg-secondary-100 p-3">
              <Icon icon="lucide:file-text" className="text-2xl text-secondary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Medical Records</h2>
              <p className="text-sm text-default-500">View your history</p>
            </div>
          </CardBody>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Recent Activity</h2>
        </CardHeader>
        <CardBody>
          <p className="text-default-500">No recent activity to display.</p>
        </CardBody>
      </Card>
    </div>
    </>
  );
};

export default PatientDashboard;