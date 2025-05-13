import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Avatar,
  Tabs,
  Tab,
  DatePicker,
  Select,
  SelectItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { parseDate, today } from "@internationalized/date";
import  PaymentDetails  from "./payment-details";


// Mock available time slots
const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM"
];

const AppointmentBooking = () => {
  const navigate = useNavigate();
  const { doctorId } = useParams();
  const [selectedDate, setSelectedDate] = React.useState(today("UTC"));
  const [selectedTime, setSelectedTime] = React.useState("");
  const [step, setStep] = React.useState("date");
  const [paymentIntent, setPaymentIntent] = React.useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Mock doctor data - in real app, fetch based on doctorId
  const doctor = {
    id: doctorId,
    name: "Dr. Sarah Wilson",
    specialty: "Cardiologist",
    imageUrl: "https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
  };

  const handleBooking = () => {
    onOpen();
  };

  const handleDateTimeConfirm = () => {
    setStep("payment");
  };

  const handlePaymentSuccess = async (paymentIntentId) => {
    setPaymentIntent(paymentIntentId);
    await saveAppointment({
      doctorId,
      date: selectedDate,
      time: selectedTime,
      paymentIntentId
    });
    setStep("confirmation");
    onOpen();
  };

  const handleConfirm = () => {
    navigate("/dashboard");
  };

  return (
    
    <div className="space-y-6">
      <Button
        variant="light"
        startContent={<Icon icon="lucide:arrow-left" />}
        onPress={() => navigate("/appointments")}
      >
        Back to Doctors
      </Button>

      <Card>
        <CardHeader className="flex gap-4">
          <Avatar
            src={doctor.imageUrl}
            size="lg"
            isBordered
            color="primary"
          />
          <div>
            <h1 className="text-xl font-bold">{doctor.name}</h1>
            <p className="text-default-500">{doctor.specialty}</p>
          </div>
        </CardHeader>
        <CardBody>
          <Tabs
            aria-label="Booking steps"
            selectedKey={step}
            onSelectionChange={(key) => setStep(key)}
          >
            <Tab key="date" title="1. Select Date & Time">
              <Card>
                <CardBody className="gap-4">
                  <div className="flex flex-col gap-4">
                    <DatePicker
                      label="Select Date"
                      value={selectedDate}
                      onChange={setSelectedDate}
                      minValue={today()}
                      isRequired
                    />
                    <Select
                      label="Select Time"
                      placeholder="Choose available time"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      isRequired
                    >
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </Select>
                    <Button
                      color="primary"
                      size="lg"
                      onPress={handleDateTimeConfirm}
                      isDisabled={!selectedDate || !selectedTime}
                      startContent={<Icon icon="lucide:arrow-right" />}
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="payment"
              title="2. Payment"
              isDisabled={!selectedDate || !selectedTime}
            >
              <PaymentDetails
                amount={100}
                onSuccess={handlePaymentSuccess}
                appointmentDetails={{
                  doctor: doctor.name,
                  date: selectedDate,
                  time: selectedTime
                }}
              />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check-circle" className="text-success text-xl" />
                  Appointment Confirmed
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <p>Your appointment has been scheduled with:</p>
                  <p className="font-semibold">{doctor.name}</p>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:calendar" />
                    <span>{selectedDate?.toString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:clock" />
                    <span>{selectedTime}</span>
                  </div>
                  <div className="rounded-lg bg-success-50 p-4">
                    <p className="text-sm text-success-700">
                      <Icon icon="lucide:mail" className="inline mr-2" />
                      A confirmation email has been sent to your registered email address.
                    </p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={handleConfirm}>
                  View Dashboard
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AppointmentBooking;
