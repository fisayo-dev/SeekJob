import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/AppPages/Login";
import SignUp from "./pages/AppPages/SignUp";
import NotAvailable from "./pages/NotAvailable";
import PrivateRoutes from "./utils/PrivateRoutes";
import Jobs from "./pages/UserPages/Jobs";
import Bookmarks from "./pages/UserPages/Bookmarks";
import Profile from "./pages/UserPages/Profile";
import Search from "./pages/UserPages/Search";
import { AuthProvider } from "./utils/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="" element={<PrivateRoutes />}>
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotAvailable />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
