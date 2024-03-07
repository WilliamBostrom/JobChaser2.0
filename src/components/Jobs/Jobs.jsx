// import { useState } from "react";
import jobList from "./randomJobs.js";
import JobsCard from "./Joblist.jsx";

function CreateJobs() {
  /*   const [items, setItems] = useState([]);
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        console.log("item");
        return index !== id;
      });
    });
  } */

  return (
    <article className="joblistArticle">
      <div className="Job">hejhej</div>
      <div className="Job2"></div>
      {jobList.map((job, index) => (
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
        />
      ))}
    </article>
  );
}

export default CreateJobs;
