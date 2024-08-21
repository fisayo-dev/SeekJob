import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/AppPages/Login";
import SignUp from "./pages/AppPages/SignUp";
import NotAvailable from "./pages/NotAvailable";
import PrivateRoutes from './utils/PrivateRoutes'
import Jobs from "./pages/UserPages/Jobs";
import Menu from './pages/UserPages/Menu'
import Create from './pages/UserPages/Create'
import Profile from './pages/UserPages/Profile'
import Search from './pages/UserPages/Search'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="" element={<PrivateRoutes />}>
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/search" element={<Search />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotAvailable />} />
      </Routes>
    </Router>
  );
}
