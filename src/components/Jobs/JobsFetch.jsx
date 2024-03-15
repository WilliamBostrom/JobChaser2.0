import { useState, useEffect } from "react";
import JobsCard from "./Joblist.jsx";
import Search from "../Header/Search.jsx";

function FetchJobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const apiUrl = "https://jobsearch.api.jobtechdev.se/search?q=javascript";

  useEffect(() => {
    const url = `${apiUrl}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data.hits);
        setFilteredJobs(data.hits);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRemoveJob = (id) => {
    setFilteredJobs((prevJobs) => {
      return prevJobs.filter((job, index) => index !== id);
    });
  };

  const handleSearch = (searchText) => {
    const filtered = jobs.filter(
      (job) =>
        job.employer.name.toLowerCase().includes(searchText.toLowerCase()) ||
        job.headline.toLowerCase().includes(searchText.toLowerCase()) ||
        job.occupation.label.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const handelSearchCity = (searchText) => {
    const filtered = jobs.filter(
      (job) =>
        job.employment_type.label
          .toLowerCase()
          .includes(searchText.toLowerCase()) ||
        job.workplace_address.municipality
          .toLowerCase()
          .includes(searchText.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <article className="joblistArticle">
      <Search onSearch={handleSearch} onSearchLoc={handelSearchCity} />
      <div className="Job2"></div>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job, index) => (
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
        <p>No jobs found.</p>
      )}
    </article>
  );
}

export default FetchJobs;
