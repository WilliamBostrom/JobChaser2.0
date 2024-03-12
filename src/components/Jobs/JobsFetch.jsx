import { useState, useEffect } from "react";
import JobsCard from "./Joblist.jsx";

function FetchJobs() {
  const [jobs, setJobs] = useState([]);
  const apiUrl = "https://jobsearch.api.jobtechdev.se/search?q=javascript";

  useEffect(() => {
    const url = `${apiUrl}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data.hits);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRemoveJob = (id) => {
    setJobs((prevJobs) => {
      return prevJobs.filter((job, index) => index !== id);
    });
  };

  return (
    <article className="joblistArticle">
      <div className="Job2"></div>
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <JobsCard
            id={index}
            key={job.id}
            company={job.employer.name}
            handleRemoveJob={handleRemoveJob}
            position={job.headline}
            img={job.logo_url}
            role={job.occupation.label}
            level={job.description.text}
            postedAt={job.publication_date}
            contract={job.employment_type.label}
            location={job.workplace_address.municipality}
            languages={job.salary_description}
            tools={job.working_hours_type.label}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </article>
  );
}

export default FetchJobs;

// img={job.logo_url}
// role={job.occupation.label}
// position={job.headline}
// level={job.description.text_formatted}
// postedAt={job.publication_date}
// contract={job.employment_type.label}
// location={job.workplace_address.municipality}
// languages={job.salary_description}
// tools={job.working_hours_type.label}
// handleRemoveJob={handleRemoveJob}
