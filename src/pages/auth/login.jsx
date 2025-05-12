import React from "react";
import { Card, CardBody, CardHeader, Input, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault(); // prevent page reload

  const role = "patient";
  if (role == "patient") {
    navigate("/dashboard/patient");
  } else {
    navigate("/dashboard/doctor");
  }
};

  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col gap-1 text-center">
          <Icon icon="lucide:heart-pulse" className="text-primary text-4xl mx-auto" />
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-sm text-default-500">
            Enter your credentials to access your account
          </p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onValueChange={setEmail}
              placeholder="Enter your email"
              startContent={<Icon icon="lucide:mail" />}
              isRequired
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onValueChange={setPassword}
              placeholder="Enter your password"
              startContent={<Icon icon="lucide:lock" />}
              isRequired
            />
            <Button
              type="submit"
              color="primary"
              size="lg"
              
              className="w-full"
            >
              Sign In
            </Button>
            <p className="text-center text-sm">
              Don't have an account?{" "}
              <Link href="/register" color="primary">
                Sign up
              </Link>
            </p>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
