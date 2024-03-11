import { useState, useEffect } from "react";
import JobsCard from "./Joblist.jsx";
import Form from "../Utility/Form.jsx";

function CreateJobs() {
  const [jobs, setJobs] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState("Junior");
  const apiUrl = "http://localhost:3000/jobs";

  useEffect(() => {
    const url = `${apiUrl}?level=${selectedLevel}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.log(err));
  }, [selectedLevel]);

  const handleSelectChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleRemoveJob = (id) => {
    setJobs((prevJobs) => {
      return prevJobs.filter((job, index) => index !== id);
    });
  };

  return (
    <article className="joblistArticle">
      <div className="Job2">
        <Form
          handleSelectChange={handleSelectChange}
          selectedLevel={selectedLevel}
        />
      </div>
      {jobs.map((job, index) => (
        <JobsCard
          id={index}
          key={job.id}
          company={job.company}
          img={job.logo}
          role={job.role}
          position={job.position}
          level={job.level}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          languages={job.languages}
          tools={job.tools}
          handleRemoveJob={handleRemoveJob} // Skicka med funktionen till JobsCard
        />
      ))}
    </article>
  );
}

export default CreateJobs;
