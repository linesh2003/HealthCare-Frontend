import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
  Link,
  Select,
  SelectItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useAuth } from "../../hooks/use-auth";

const Register = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    name: "",
    userType: "patient",
  });

  const { register, isLoading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(formData);
  };

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col gap-1 text-center">
          <Icon icon="lucide:user-plus" className="text-primary text-4xl mx-auto" />
          <h1 className="text-2xl font-bold">Create Account</h1>
          <p className="text-sm text-default-500">
            Sign up to start booking appointments
          </p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Full Name"
              value={formData.name}
              onValueChange={(value) => handleChange("name", value)}
              placeholder="Enter your full name"
              startContent={<Icon icon="lucide:user" />}
              isRequired
            />
            <Input
              label="Email"
              type="email"
              value={formData.email}
              onValueChange={(value) => handleChange("email", value)}
              placeholder="Enter your email"
              startContent={<Icon icon="lucide:mail" />}
              isRequired
            />
            <Input
              label="Password"
              type="password"
              value={formData.password}
              onValueChange={(value) => handleChange("password", value)}
              placeholder="Create a password"
              startContent={<Icon icon="lucide:lock" />}
              isRequired
            />
            <Select
              label="I am a"
              value={formData.userType}
              onChange={(e) => handleChange("userType", e.target.value)}
              placeholder="Select user type"
              isRequired
            >
              <SelectItem key="patient" value="patient">Patient</SelectItem>
              <SelectItem key="doctor" value="doctor">Doctor</SelectItem>
            </Select>
            <Button
              type="submit"
              color="primary"
              size="lg"
              isLoading={isLoading}
              className="w-full"
            >
              Create Account
            </Button>
            <p className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" color="primary">
                Sign in
              </Link>
            </p>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
