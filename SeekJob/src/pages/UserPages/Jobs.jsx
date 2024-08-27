import { useState } from "react";
import UserPage from "./UserPage";
import jobImg from "../../assets/react.svg";
import { FaArrowDown, FaLocationDot } from "react-icons/fa6";
import Bookmark from "../../icons/Bookmark";
const Jobs = () => {
  const [currentTab, setCurrentTab] = useState("tech");
  const [location, setLocation] = useState('')
  
  // Get current location
  fetch('https://ipinfo.io?token=e4a8397c5566b0')
  .then(response => response.json())
  .then(data => {
    const country = data.country;
    const region = data.region;
    setLocation(`${region}, ${country}`)
  })
  .catch(error => {
    console.error('Error fetching the IP information:', error);
  });

  return (
    <UserPage>
      <div className="grid gap-5 justify-items-center">
        <div className=" justify-start catgeories-tabs md:justify-center w-full overflow-scroll gap-6 flex items-center">
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
        <div className="border-1 text-slate-500 rounded-lg px-4 app-gray gap-2 flex items-center h-12 w-full lg:w-2/4 md:w-3/4">
          <FaLocationDot />
          <input
            type="text"
            placeholder="Type your location"
            className="w-full"
            value={location}
          />

          <FaArrowDown />
        </div>
        <div className="grid">
          <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <div className="job-card">
              <div className="grid gap-1 ">
                <div className=" rounded w-full ">
                  <img src={jobImg} alt="" className="job-card-img" />
                </div>
                <h2 className="text-[1.5rem] font-bold line-height-ok">
                  React Native Developer
                </h2>
              </div>
              <div className="grid gap-4 ">
                <div className="">
                  <p>Tek Experts.</p>
                  <p>Lagos</p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-between items-center ">
                <p>Posted 30 days ago</p>
                <Bookmark className="text-[1.7rem]"/>
              </div>
            </div>
            <div className="job-card">
              <div className="grid gap-1 ">
                <div className=" rounded w-full ">
                  <img src={jobImg} alt="" className="job-card-img" />
                </div>
                <h2 className="text-[1.5rem] font-bold line-height-ok">
                  React Native Developer
                </h2>
              </div>
              <div className="grid gap-4 ">
                <div className="">
                  <p>Tek Experts.</p>
                  <p>Lagos</p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-between items-center ">
                <p>Posted 30 days ago</p>
                <Bookmark className="text-[1.7rem]"/>
              </div>
            </div>
            <div className="job-card">
              <div className="grid gap-1 ">
                <div className=" rounded w-full ">
                  <img src={jobImg} alt="" className="job-card-img" />
                </div>
                <h2 className="text-[1.5rem] font-bold line-height-ok">
                  React Native Developer
                </h2>
              </div>
              <div className="grid gap-4 ">
                <div className="">
                  <p>Tek Experts.</p>
                  <p>Lagos</p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-between items-center ">
                <p>Posted 30 days ago</p>
                <Bookmark className="text-[1.7rem]"/>
              </div>
            </div>
            <div className="job-card">
              <div className="grid gap-1 ">
                <div className=" rounded w-full ">
                  <img src={jobImg} alt="" className="job-card-img" />
                </div>
                <h2 className="text-[1.5rem] font-bold line-height-ok">
                  React Native Developer
                </h2>
              </div>
              <div className="grid gap-4 ">
                <div className="">
                  <p>Tek Experts.</p>
                  <p>Lagos</p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-between items-center ">
                <p>Posted 30 days ago</p>
                <Bookmark className="text-[1.7rem]"/>
              </div>
            </div>

            {/* <div className="job-card">
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
          </div> */}
          </div>
        </div>
      </div>
    </UserPage>
  );
};

export default Jobs;
