import React, { useEffect, useState } from "react";
import { FaBars, FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import { SiGooglehome } from "react-icons/si";
import { NavLink } from "react-router-dom";

const AppFooter = ({responsive}) => {
  const active = ({ active}) => {
    active ? "active" : "";
  };

  return (
    <div className={`${responsive ? "grid" :'hidden'} app-footer px-[5vw] border-t-2 w-full`}>
      <div className="grid grid-cols-4 text-[1.7rem] justify-center items-center">
        <NavLink to="/jobs" className={`app-page-tabs ${active}`}>
          <SiGooglehome className="m-auto"/>
        </NavLink>
        <NavLink to="/search" className={`app-page-tabs ${active}`}>
          <FaMagnifyingGlass className="m-auto"/>
        </NavLink>
        <NavLink to="/profile" className={`app-page-tabs ${active} `}>
          <FaUser className="m-auto"/>
        </NavLink>
        <NavLink to="/menu" className={`app-page-tabs ${active}`}>
          <FaBars className="m-auto"/>
        </NavLink>
      </div>
    </div>
  );
};

export default AppFooter;
