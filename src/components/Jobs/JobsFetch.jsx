import { useState, useEffect } from "react";
import JobsCard from "./Joblist.jsx";
import Search from "../Header/Search.jsx";
import { useFetch } from "../hooks/useFetch.jsx";

function FetchJobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [page, setPage] = useState(1);

  const resultsPerPage = 100;
  const apiUrl = `https://jobsearch.api.jobtechdev.se/search?q=bank&limit=${resultsPerPage}`;

  const { data } = useFetch(apiUrl);

  useEffect(() => {
    if (data) {
      setJobs(data.hits);
      setFilteredJobs(data.hits);
    }
  }, [data]);

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

  const handleSearchCity = (searchText) => {
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
      <div className="container">
        <Search onSearch={handleSearch} onSearchLoc={handleSearchCity} />
        {data ? (
          <ul>
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
              <p>Inga jobb hittade.</p>
            )}
          </ul>
        ) : (
          <p>Laddar...</p>
        )}
        <button onClick={() => setPage(page + 1)}>Hämta fler jobb</button>
      </div>
    </article>
  );
}

export default FetchJobs;
