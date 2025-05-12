import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Chip,
  Card,
  CardHeader,
  CardBody,
  User,
} from "@heroui/react";
import { Icon } from "@iconify/react";


const appointments = [
  {
    id: "1",
    patient: {
      name: "Jane Cooper",
      avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=1",
    },
    date: "2024-02-20",
    time: "09:00 AM",
    type: "Check-up",
    status: "pending",
  },
  {
    id: "2",
    patient: {
      name: "Robert Fox",
      avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=2",
    },
    date: "2024-02-20",
    time: "10:30 AM",
    type: "Consultation",
    status: "confirmed",
  },
  {
    id: "3",
    patient: {
      name: "Emily Wilson",
      avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=3",
    },
    date: "2024-02-20",
    time: "02:00 PM",
    type: "Follow-up",
    status: "cancelled",
  },
];

const statusColorMap = {
  pending: "warning",
  confirmed: "success",
  cancelled: "danger",
};

export const AppointmentTable = () => {
  const renderCell = React.useCallback((appointment, columnKey) => {
    switch (columnKey) {
      case "patient":
        return (
          <User
            name={appointment.patient.name}
            avatarProps={{
              src: appointment.patient.avatar,
              size: "sm",
            }}
          />
        );
      case "status":
        return (
          <Chip
            color={statusColorMap[appointment.status]}
            size="sm"
            variant="flat"
          >
            {appointment.status}
          </Chip>
        );
      case "actions":
        return (
          <div className="flex gap-2">
            {appointment.status === "pending" && (
              <>
                <Button
                  isIconOnly
                  color="success"
                  size="sm"
                  variant="flat"
                  onPress={() => console.log("Accept appointment", appointment.id)}
                >
                  <Icon icon="lucide:check" className="h-4 w-4" />
                </Button>
                <Button
                  isIconOnly
                  color="danger"
                  size="sm"
                  variant="flat"
                  onPress={() => console.log("Reject appointment", appointment.id)}
                >
                  <Icon icon="lucide:x" className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        );
      default:
        return appointment[columnKey];
    }
  }, []);

  return (
    <>
    
    <Card>
      <CardHeader className="flex items-center justify-between">
        <h4 className="text-large font-semibold">Today's Appointments</h4>
       
      </CardHeader>
      <CardBody>
        <Table removeWrapper aria-label="Appointments table">
          <TableHeader>
            <TableColumn>PATIENT</TableColumn>
            <TableColumn>DATE</TableColumn>
            <TableColumn>TIME</TableColumn>
            <TableColumn>TYPE</TableColumn>
            <TableColumn>STATUS</TableColumn>
            <TableColumn>ACTIONS</TableColumn>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                {["patient", "date", "time", "type", "status", "actions"].map((columnKey) => (
                  <TableCell key={columnKey}>
                    {renderCell(appointment, columnKey)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
    </> 
  );
};
