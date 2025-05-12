import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "../store/auth-slice";

export const useAuth = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      // Mock login logic
      const mockUser = { id: "1", email, name: "John Doe", userType: "doctor" };
      dispatch(setUser(mockUser));
      navigate("/dashboard/doctor");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data) => {
    setIsLoading(true);
    try {
      // Mock registration logic
      const mockUser = { id: "1", ...data };
      dispatch(setUser(mockUser));
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    dispatch(clearUser());
    navigate("/login");
  };

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
  };
};
