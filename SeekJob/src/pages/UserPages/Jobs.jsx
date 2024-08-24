import React, { useState } from "react";
import UserPage from "./UserPage";

const Jobs = () => {
  const [currentTab, setCurrentTab] = useState("tech");
  return (
    <UserPage>
      <div className="p-3 justify-start catgeories-tabs md:justify-center w-full overflow-scroll gap-6 flex items-start">
        <p
          className={`${
            currentTab == "tech"
              ? "font-bold border-b-2 border-black"
              : "hover:border-gray-300 hover:border-b-2"
          } cursor-pointer `}
          onClick={() => setCurrentTab("tech")}
        >
          Tech
        </p>
        <p
          className={`${
            currentTab == "education"
              ? "font-bold border-b-2 border-black"
              : "hover:border-gray-300 hover:border-b-2"
          } cursor-pointer `}
          onClick={() => setCurrentTab("education")}
        >
          Education
        </p>
        <p
          className={`${
            currentTab == "leadership"
              ? "font-bold border-b-2 border-black"
              : "hover:border-gray-300 hover:border-b-2"
          } cursor-pointer `}
          onClick={() => setCurrentTab("leadership")}
        >
          Leadership
        </p>
        <p
          className={`${
            currentTab == "internship"
              ? "font-bold border-b-2 border-black"
              : "hover:border-gray-300 hover:border-b-2"
          } cursor-pointer `}
          onClick={() => setCurrentTab("internship")}
        >
          Internship
        </p>
        <p
          className={`${
            currentTab == "art"
              ? "font-bold border-b-2 border-black"
              : "hover:border-gray-300 hover:border-b-2"
          } cursor-pointer `}
          onClick={() => setCurrentTab("art")}
        >
          Art
        </p>
        <p
          className={`${
            currentTab == "other"
              ? "font-bold border-b-2 border-black"
              : "hover:border-gray-300 hover:border-b-2"
          } cursor-pointer `}
          onClick={() => setCurrentTab("other")}
        >
          Other
        </p>
      </div>
      <div className="grid px-[5vw] py-5">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
          <div className="job-card"></div>
          <div className="job-card"></div>
          <div className="job-card"></div>
          <div className="job-card"></div>
          <div className="job-card"></div>
          <div className="job-card"></div>
          <div className="job-card"></div>
          <div className="job-card"></div>
        </div>
      </div>
    </UserPage>
  );
};

export default Jobs;
