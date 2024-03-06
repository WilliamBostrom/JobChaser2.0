import jobList from "./randomJobs.js";
import JobsCard from "./Joblist.jsx";

function CreateJobs(job) {
  return (
    <JobsCard
      key={job.id}
      title={job.title}
      company={job.company}
      content={job.content}
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
  );
}

function DisplayCards() {
  return (
    <article>
      {jobList.map((job, index) => (
        <CreateJobs key={index} {...job} />
      ))}
    </article>
  );
}

export default DisplayCards;
