import React, { useEffect, useState } from "react";
import { FaBars, FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import { SiGooglehome } from "react-icons/si";
import { NavLink } from "react-router-dom";

const AppFooter = ({responsive}) => {
  const active = ({ active}) => {
    active ? "active" : "";
  };

  return (
    <div className={`${responsive ? "grid" :'hidden'} app-footer items-center bg-white shadow-inner px-10`}>
      <div className="flex justify-between text-[1.6rem] gap-5 items-center">
        <NavLink to="/jobs" className={`app-page-tabs ${active}`}>
          <SiGooglehome />
        </NavLink>
        <NavLink to="/search" className={`app-page-tabs ${active}`}>
          <FaMagnifyingGlass />
        </NavLink>
        <NavLink to="/profile" className={`app-page-tabs ${active} `}>
          <FaUser />
        </NavLink>
        <NavLink to="/menu" className={`app-page-tabs ${active}`}>
          <FaBars />
        </NavLink>
      </div>
    </div>
  );
};

export default AppFooter;
