import { FaMagnifyingGlass, FaPowerOff, FaUser } from "react-icons/fa6";
import { SiGooglehome } from "react-icons/si";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Bookmark from "../icons/Bookmark";
import { useAuth } from "../utils/AuthContext";

const Header = ({ responsive }) => {
  const active = ({ active }) => {
    active ? "active" : "";
  };
  const {logoutUser} = useAuth()
  return (
    <div className="shadow-sm app-header border-b-2 flex items-center py-2 px-[5vw] text-[1.7rem] justify-between">
      <NavLink to="/jobs">
        <Logo />
      </NavLink>
      <div className="flex justify-center gap-5 items-center">
        <NavLink
          to="/jobs"
          className={`app-page-tabs ${active} ${
            responsive ? "hidden" : "flex"
          }`}
        >
          <SiGooglehome />
        </NavLink>
        <NavLink
          to="/search"
          className={`app-page-tabs ${active} ${
            responsive ? "hidden" : "flex"
          }`}
        >
          <FaMagnifyingGlass />
        </NavLink>
        <NavLink
          to="/profile"
          className={`app-page-tabs ${active} ${
            responsive ? "hidden" : "flex"
          }`}
        >
          <FaUser />
        </NavLink>
      </div>
      <div className="flex justify-center cursor-pointer gap-5 items-center">
        <NavLink to="/bookmarks" className="app-page-tabs">
          <Bookmark className={`${responsive ? "hidden" : "flex"} `} />
        </NavLink>
        <div onClick={logoutUser}>
          <FaPowerOff className={`hover-app-text-color`} />
        </div>
      </div>
    </div>
  );
};

export default Header;
