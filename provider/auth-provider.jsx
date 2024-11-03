import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function AuthProvider({ children }) {
  const { user, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    // If loading, do nothing
    if (isLoading) return;

    // If user is not available, redirect to the home page
    if (!user) {
      navigate("/home");
    }
  }, [user, isLoading, navigate]);

  return children;
}
