import { useEffect, useState } from "react";
import UserPage from "./UserPage";
import { FaArrowDown, FaLocationDot } from "react-icons/fa6";
import JobCard  from "../../components/User/JobCard";

const Jobs = () => {
  const [currentTab, setCurrentTab] = useState("tech");
  const [location, setLocation] = useState("");
  const [jobsList, setJobList] = useState([]);

  // Get current location
  useEffect(() => {
    fetch("https://ipinfo.io?token=e4a8397c5566b0")
      .then((response) => response.json())
      .then((data) => {
        const country = data.country;
        const region = data.region;
        setLocation(`${region}`);
      })
      .catch((error) => {
        console.error("Error fetching the IP information:", error);
      });
  });

  const fetchJobsFromIndeed = async (query, location) => {
    const url = `https://indeed-jobs-api.p.rapidapi.com/indeed-us/?offset=0&keyword=${query}&location=${location}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "4617d18d24msh1d390f6ec109602p1d5274jsn4bbe1157f187",
        "x-rapidapi-host": "indeed-jobs-api.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setJobList((prev) => prev.push(result));
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (location) {
      fetchJobsFromIndeed("web developer", location);
    }
  }, [location]);

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
            {jobsList.map((jobItem) => {
              <JobCard key={jobItem.id} job={jobItem} />;
            })}

              Applet

          </div>
        </div>
      </div>
    </UserPage>
  );
};

export default Jobs;
