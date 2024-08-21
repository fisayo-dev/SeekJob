import React, { useEffect } from "react";
import Header from "../../components/Header";
import { useState } from "react";
import AppFooter from "../../components/AppFooter";

const UserPage = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  },[]);
  useEffect(() => {
    windowWidth < 998 ? setResponsive(true) : setResponsive(false);
  }, [windowWidth]);

  return (
    <div>
      <Header responsive={responsive} />
      <div className="app-content grid justify-center px-5 pt-2 overflow-scroll ">
        {children}
      </div>
      <AppFooter responsive={responsive} />
    </div>
  );
};

export default UserPage;
