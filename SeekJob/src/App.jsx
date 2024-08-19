import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/AppPages/Login";
import SignUp from "./pages/AppPages/SignUp";
import NotAvailable from "./pages/NotAvailable";
import PrivateRoutes from './utils/PrivateRoutes'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="" element={<PrivateRoutes />}>
          <Route path="/app" element={<LandingPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotAvailable />} />
      </Routes>
    </Router>
  );
}
