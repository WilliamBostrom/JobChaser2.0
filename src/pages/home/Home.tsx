import React, { useState, useEffect } from "react";
import JobsCard from "../../components/Jobs/Joblist";
import { useFetch } from "../../components/hooks/useFetch";
import Search from "../../components/Header/Search";

interface Job {
  id: string;
  employer: {
    name: string;
  };
  headline: string;
  occupation: {
    label: string;
  };
  logo_url: string;
  description: {
    text: string;
  };
  publication_date: string;
  employment_type: {
    label: string;
  };
  workplace_address: {
    municipality: string;
  };
  salary_description: string;
  working_hours_type: {
    label: string;
  };
}

function FetchJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const query: string = searchText || "javascript";
  const resultsPerPage: number = 100;
  const apiUrl: string = `https://jobsearch.api.jobtechdev.se/search?q=${query}&limit=${resultsPerPage}`;

  const { data } = useFetch(apiUrl);

  useEffect(() => {
    if (data) {
      setJobs(data.hits);
      setFilteredJobs(data.hits);
    }
  }, [data]);

  const handleRemoveJob = (id: number) => {
    setFilteredJobs((prevJobs) => {
      return prevJobs.filter((job, index) => index !== id);
    });
  };

  const handleSearch = (searchText: string) => {
    setSearchText(searchText);
    const filtered = jobs.filter(
      (job) =>
        job.employer.name.toLowerCase().includes(searchText.toLowerCase()) ||
        job.headline.toLowerCase().includes(searchText.toLowerCase()) ||
        job.occupation.label.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <article className="joblistArticle">
      <div className="container">
        <Search onSearch={handleSearch} />
        {data ? (
          <ul>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <JobsCard
                  num={index}
                  id={job.id}
                  key={job.id}
                  company={job.employer.name}
                  handleRemoveJob={handleRemoveJob}
                  position={job.headline}
                  img={job.logo_url}
                  role={job.occupation.label}
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
      </div>
    </article>
  );
}

export default FetchJobs;
