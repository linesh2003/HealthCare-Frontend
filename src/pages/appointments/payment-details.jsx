import React from "react";
import {
  Card,
  CardBody,
  Input,
  Button,
  Divider
} from "@heroui/react";
import { Icon } from "@iconify/react";

const PaymentDetails = ({ amount, onSuccess, appointmentDetails }) => {
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      // Mock payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      onSuccess("mock_payment_intent_id");
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card>
      <CardBody className="gap-6">
        <div className="flex flex-col gap-4">
          <div className="rounded-lg bg-default-50 p-4">
            <h3 className="text-lg font-semibold mb-2">Appointment Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-default-600">Doctor</span>
                <span className="font-medium">{appointmentDetails.doctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-default-600">Date</span>
                <span className="font-medium">{appointmentDetails.date?.toString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-default-600">Time</span>
                <span className="font-medium">{appointmentDetails.time}</span>
              </div>
            </div>
          </div>

          <Divider />

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Payment Details</h3>
            <Input
              label="Card Number"
              placeholder="4242 4242 4242 4242"
              startContent={<Icon icon="lucide:credit-card" />}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Expiry Date"
                placeholder="MM/YY"
              />
              <Input
                label="CVC"
                placeholder="123"
                type="password"
              />
            </div>
          </div>

          <Divider />

          <div className="flex justify-between items-center text-lg font-semibold">
            <span>Total Amount</span>
            <span>${amount.toFixed(2)}</span>
          </div>

          <Button
            color="primary"
            size="lg"
            isLoading={isProcessing}
            onPress={handlePayment}
            startContent={!isProcessing && <Icon icon="lucide:lock" />}
          >
            Pay ${amount.toFixed(2)}
          </Button>

          <p className="text-center text-small text-default-500">
            <Icon icon="lucide:shield-check" className="inline mr-1" />
            Your payment information is secure
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default PaymentDetails;
