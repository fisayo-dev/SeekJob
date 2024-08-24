import React, { useEffect } from "react";
import Header from "../../components/Header";
import { useState } from "react";
import AppFooter from "../../components/AppFooter";

const UserPage = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    windowWidth < 900 ? setResponsive(true) : setResponsive(false);
  }, [windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  },[]);
  
  return (
    <div className="grid h-[100vh]">
      <Header responsive={responsive} />
      <div className="items-start grid gap-6 px-5 pt-2 overflow-scroll ">
        {children}
      </div>
      <AppFooter responsive={responsive} />
    </div>
  );
};

export default UserPage;
