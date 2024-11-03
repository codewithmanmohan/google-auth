import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Dashboard from "./dashboard/dashboard";
import AuthProvider from "../provider/auth-provider";

function App() {
  const { user } = useAuth0();
  console.log("User Deatils", user);
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <AuthProvider>
                  <Dashboard />
                </AuthProvider>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
