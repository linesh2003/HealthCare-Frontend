import React from 'react'
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const PatientHeader = () => {
    const navigate = useNavigate();
    const logout = () =>{
        navigate("/login")
    }
  return (
    <>
    <HeroNavbar maxWidth="xl">
          <NavbarBrand>
            <Icon icon="lucide:heart-pulse" className="text-primary text-2xl" />
            <p className="font-bold text-inherit ml-2" style={{cursor:"pointer"}} onClick={() => navigate("/dashboard/patient")}>HealthCare</p>
          </NavbarBrand>
    
          <NavbarContent justify="end">
            
                <NavbarItem>
                  <Button
                    variant="light"
                    startContent={<Icon icon="lucide:calendar" />}
                    as={Link}
                    to="/appointments"
                  >
                    Appointments
                  </Button>
                </NavbarItem>
                <NavbarItem>
                  <Button
                    color="primary"
                    variant="flat"
                    startContent={<Icon icon="lucide:log-out" />}
                    onPress={logout}
                  >
                    Logout
                  </Button>
                </NavbarItem>
              
          </NavbarContent>
        </HeroNavbar>
            </>
  )
}

export default PatientHeader