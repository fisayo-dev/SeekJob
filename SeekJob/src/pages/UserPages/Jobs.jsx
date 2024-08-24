import { useState } from "react";
import UserPage from "./UserPage";
import Button from '../../components/Button'
import jobImg from '../../assets/react.svg'
const Jobs = () => {
  const [currentTab, setCurrentTab] = useState("tech");
  return (
    <UserPage>
      <div className="py-5 justify-start catgeories-tabs md:justify-center w-full overflow-scroll gap-6 flex items-center">
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
      <div className="grid">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <div className="job-card">
            <div className="flex gap-2 items-center">
              <img src={jobImg} alt="" className="job-card-img" />
              <h2 className="text-[1.5rem] font-bold line-height-ok">React Native Developer</h2>
            </div>
            <div className="grid gap-1">
              <p className="text-[1.1rem]">Lorem</p>
              <p className="text-[1.1rem]">Lorem</p>
              <p className="text-[1.1rem]">Lorem</p>
              <p className="text-[1.1rem]">Lorem</p>
            </div>
            <Button>More Info</Button>
          </div>
          <div className="job-card">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            harum dolores placeat, dolorem perferendis beatae!
          </div>
          <div className="job-card">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            harum dolores placeat, dolorem perferendis beatae!
          </div>
          <div className="job-card">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            harum dolores placeat, dolorem perferendis beatae!
          </div>
          <div className="job-card">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            harum dolores placeat, dolorem perferendis beatae!
          </div>
          <div className="job-card">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            harum dolores placeat, dolorem perferendis beatae!
          </div>
          <div className="job-card">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            harum dolores placeat, dolorem perferendis beatae!
          </div>
          <div className="job-card">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            harum dolores placeat, dolorem perferendis beatae!
          </div>
        </div>
      </div>
    </UserPage>
  );
};

export default Jobs;
