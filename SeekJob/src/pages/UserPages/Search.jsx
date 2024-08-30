import UserPage from "./UserPage";
import { useState, useEffect } from "react";
import SearchIcon from "../../icons/SearchIcon";
import JobCard from "../../components/User/JobCard";

const Search = () => {
  const [countryName, setCountryName] = useState("");
  const [location, setLocation] = useState("at");
  const [searchTerm, setSearchTerm] = useState("");
  const [jobsList, setJobList] = useState([]);

  const app_id = import.meta.env.VITE_ADUNZA_API_ID;
  const app_key = import.meta.env.VITE_ADUNZA_API_KEY;
  const results_per_page = import.meta.env.VITE_JOB_FETCH_RESULTS_PER_PAGE

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
    const url = `https://api.adzuna.com/v1/api/jobs/${location}/search/1?app_id=${app_id}&app_key=${app_key}&results_per_page=${results_per_page}&what=${searchTerm}`;

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
  };

  useEffect(() => {
    fetchJobs()
  },[searchTerm,location])
  return (
    <UserPage>
      <div className="grid gap-5 justify-items-center">
        <div className="border-1 text-slate-500 rounded-lg px-4 app-gray gap-2 flex items-center h-12 w-full lg:w-2/4 md:w-3/4">
          <SearchIcon />
          <input
            type="text"
            className="bg-transparent w-full"
            placeholder="Search for any job"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <p type="text">{countryName}</p>
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
          <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {jobsList.length !== 0 &&
              jobsList.map((jobItem) => (
                <JobCard key={jobItem.id} job={jobItem} />
              ))}
          </div>
        </div>
      </div>
    </UserPage>
  );
};

export default Search;
