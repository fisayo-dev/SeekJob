import { NavLink, Outlet } from "react-router-dom";
import { FaArrowLeft, FaGlobe } from "react-icons/fa6";
import Button from "../components/Button";

const PrivateRoutes = () => {
  const user = true;
  return user ? (
    <Outlet />
  ) : (
    <div className="w-[100vw] h-[100vh] grid items-center">
      <div className="m-auto p-5 grid gap-3 text-center">
        <p className="font-bold text-red-500 cursor-pointer">SeekJob</p>
        <FaGlobe size={100} className="m-auto" />
        <h2 className="text-3xl">Page is not acessible.</h2>
        <p>We can't find any active session so you are not logged in.</p>
        <div className="flex gap-2 items-center justify-center">
          <NavLink to="/">
            <Button className="flex items-center gap-3">
              <FaArrowLeft />
              <p>Back to Main App</p>
            </Button>
          </NavLink>
          <NavLink to="/signin">
            <Button>SignIn</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoutes;
