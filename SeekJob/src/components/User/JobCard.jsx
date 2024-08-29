import Bookmark from "../../icons/Bookmark";

const JobCard = ({job}) => {
  return (
    <div className="job-card">
      <div className="grid gap-1 ">
        <div className=" rounded w-full ">
          <img src={job.company_logo_url} alt="" className="job-card-img" />
        </div>
        <h2 className="text-[1.5rem] font-bold line-height-ok">
          {job.job_title}
        </h2>
      </div>
      <div className="grid gap-4 ">
        <div className="">
          <p>{job.company_name}</p>
          <p>{job.job_location}</p>
        </div>
        <div>
          <p>Salary: {job.salary}</p>
          <p>Rating: {job.company_rating}.</p>
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
