import React from "react";
import { useEffect, useState } from "react";
import UserPage from "./UserPage";
import { FaLocationDot } from "react-icons/fa6";
import JobCard from "../../components/User/JobCard";
import Spinner from "../../components/Spinner";

const Jobs = () => {
  const [currentTab, setCurrentTab] = useState("coding");
  const [countryName, setCountryName] = useState("");
  const [location, setLocation] = useState("us");
  const [jobsList, setJobList] = useState([]);
  const [loading, setLoading] = useState(false);
  const app_id = import.meta.env.VITE_ADUNZA_API_ID;
  const app_key = import.meta.env.VITE_ADUNZA_API_KEY;
  const results_per_page = import.meta.env.VITE_JOB_FETCH_RESULTS_PER_PAGE;

  const countryCodes = {
    AT: "Austria",
    AU: "Australia",
    BE: "Belgium",
    BR: "Brazil",
    CA: "Canada",
    CH: "Switzerland",
    DE: "Germany",
    ES: "Spain",
    FR: "France",
    GB: "United Kingdom",
    IN: "India",
    IT: "Italy",
    MX: "Mexico",
    NL: "Netherlands",
    NZ: "New Zealand",
    PL: "Poland",
    SG: "Singapore",
    US: "United States",
    ZA: "South Africa",
  };

  function getCountryName(code) {
    setCountryName(countryCodes[code.toUpperCase()] || "Unknown Country Code");
  }

  useEffect(() => {
    getCountryName(location);
  });
  const fetchJobs = async () => {
    setLoading(true);
    const url = `https://api.adzuna.com/v1/api/jobs/${location}/search/?app_id=${app_id}&app_key=${app_key}&results_per_page=${results_per_page}&what=${currentTab}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setJobList(data.results);
      console.log(data.results);
    } catch (error) {
      console.error(error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, [currentTab, location]);

  return (
    <UserPage>
      <div className="grid gap-5 justify-items-center">
        <div className=" justify-start catgeories-tabs md:justify-center w-full overflow-scroll gap-6 flex items-center">
          <p
            className={`${
              currentTab == "coding"
                ? "font-bold border-b-2 border-black"
                : "hover:border-gray-300 hover:border-b-2"
            } cursor-pointer `}
            onClick={() => setCurrentTab("coding")}
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
              currentTab == "marketing"
                ? "font-bold border-b-2 border-black"
                : "hover:border-gray-300 hover:border-b-2"
            } cursor-pointer `}
            onClick={() => setCurrentTab("marketing")}
          >
            Marketing
          </p>
          <p
            className={`${
              currentTab == "finance"
                ? "font-bold border-b-2 border-black"
                : "hover:border-gray-300 hover:border-b-2"
            } cursor-pointer `}
            onClick={() => setCurrentTab("finance")}
          >
            Finance
          </p>
          <p
            className={`${
              currentTab == "human resource"
                ? "font-bold border-b-2 border-black"
                : "hover:border-gray-300 hover:border-b-2"
            } cursor-pointer `}
            onClick={() => setCurrentTab("human resource")}
          >
            Human Resource
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
          <p type="text" className="w-full">
            {countryName}
          </p>
          <select
            type="text"
            placeholder="Type your location"
            className="capitalize bg-transparent outline-0 "
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>at</option>
            <option>gb</option>
            <option>us</option>
            <option>es</option>
            <option>au</option>
            <option>be</option>
            <option>br</option>
            <option>ca</option>
            <option>ch</option>
            <option>de</option>
            <option>fr</option>
            <option>in</option>
            <option>it</option>
            <option>mx</option>
            <option>nl</option>
            <option>nz</option>
            <option>pl</option>
            <option>sg</option>
            <option>za</option>
          </select>
        </div>
        <div className="grid">
          {loading ? (
            <div className="py-5 grid text-center  justify-items-center app-text-color gap-2">
              <Spinner />
              <div>
                Fetching <b>{`${currentTab}`}</b> jobs...
              </div>
            </div>
          ) : (
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              {jobsList.length !== 0 &&
                jobsList.map((jobItem) => (
                  <JobCard key={jobItem.id} job={jobItem} />
                ))}
            </div>
          )}
        </div>
      </div>
    </UserPage>
  );
};

export default Jobs;
