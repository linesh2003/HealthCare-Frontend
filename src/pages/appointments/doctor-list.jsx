import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Card, 
  CardBody, 
  CardHeader,
  Button,
  Avatar,
  Chip
} from "@heroui/react";
import { Icon } from "@iconify/react";
import PatientHeader from "../../components/PatientHeader";

// Mock data for doctors
const doctors = [
  {
    id: "1",
    name: "Dr. Sarah Wilson",
    specialty: "Cardiologist",
    rating: 4.8,
    experience: "15 years",
    availableToday: true,
    imageUrl: "https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    rating: 4.9,
    experience: "12 years",
    availableToday: false,
    imageUrl: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2"
  },
  {
    id: "3",
    name: "Dr. Emily Parker",
    specialty: "Pediatrician",
    rating: 4.7,
    experience: "10 years",
    availableToday: true,
    imageUrl: "https://img.heroui.chat/image/avatar?w=200&h=200&u=3"
  }
];

const DoctorList = () => {
  const navigate = useNavigate();

  return (
    <>
      <PatientHeader />

      <div className="space-y-6 p-4">
        <button
          onClick={() => navigate("/dashboard/patient")}
          style={{
            backgroundColor: "#e0e0e0",
            border: "none",
            padding: "10px 16px",
            borderRadius: "6px",
            cursor: "pointer",
            marginBottom: "20px"
          }}
        >
          ← Back to Dashboard
        </button>

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Find a Doctor</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex gap-3">
                <Avatar
                  src={doctor.imageUrl}
                  size="lg"
                  isBordered
                  color="primary"
                />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">{doctor.name}</p>
                  <p className="text-small text-default-500">{doctor.specialty}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Icon icon="lucide:star" className="text-warning" />
                    <span className="text-small">{doctor.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:briefcase" className="text-default-500" />
                    <span className="text-small">{doctor.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Chip
                      color={doctor.availableToday ? "success" : "default"}
                      variant="flat"
                      size="sm"
                    >
                      {doctor.availableToday ? "Available Today" : "Next Available Tomorrow"}
                    </Chip>
                  </div>
                  <Button
                    color="primary"
                    onPress={() => navigate(`/appointments/book/${doctor.id}`)}
                    startContent={<Icon icon="lucide:calendar" />}
                    fullWidth
                  >
                    Book Appointment
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default DoctorList;