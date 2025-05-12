import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import { Icon } from "@iconify/react";
// import { useAuth } from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";

const Navbar=()=> {
  
  
  const navigate = useNavigate();
  
  const logout = () =>{
    navigate("/login")
  }

  return (
    <HeroNavbar maxWidth="xl">
      <NavbarBrand>
        <Icon icon="lucide:heart-pulse" className="text-primary text-2xl" />
        <p className="font-bold text-inherit ml-2">HealthCare</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        
          
            <NavbarItem>
              <Button as={Link} to="/login" variant="light">
                Login
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} to="/register" color="primary">
                Sign Up
              </Button>
            </NavbarItem>
         
      </NavbarContent>
    </HeroNavbar>
  );
}

export default Navbar;