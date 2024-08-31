import { NavLink } from "react-router-dom";
import Bookmark from "../../icons/Bookmark";
import Button from "../Button";
import OpenLinkTab from '../../icons/OpenLinkTab'

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="grid gap-1 w-full">
        <div className="grid py-1 grid-cols-2 justify-between">
          <img src={job.company_logo_url} alt="" className="job-card-img" />
          <NavLink to={`${job.redirect_url}`} target="_blank" rel="noopener noreferrer">
            <Button customStyles="hidden-btn hidden items-center gap-1">
              <p>Visit Site</p>
              <OpenLinkTab />
            </Button>
          </NavLink>
        </div>
        <h2 className="text-[1.5rem] font-bold line-height-ok text-wrap capitalize">
          {job.title.substring(0, 25)}...
        </h2>
      </div>
      <div className="grid gap-4 ">
        <div className="">
          <p>{job.company.display_name}</p>
          <p>{job.location.display_name}</p>
        </div>
        <div>
          <p>{job.salary_max && `
            Salary: $${job.salary_min} - $${job.salary_max}
            `}
          </p>
          <p>Description: {job.description.substring(0, 75)}...</p>
        </div>
      </div>
      <div className="flex w-full justify-between items-center ">
        <p>Posted 30 days ago</p>
        <Bookmark className="text-[1.7rem]" />
      </div>
    </div>
  );
};

export default JobCard;
