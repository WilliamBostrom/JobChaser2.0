import { useParams } from "react-router-dom";
import { useFetch } from "../../components/hooks/useFetch";

// styles
import "./JobSite.css";

function JobSite() {
  const { id } = useParams();

  const url = `https://jobsearch.api.jobtechdev.se/search?q=${id}`;

  const { data: job } = useFetch(url);
  console.log({ ...job });

  return (
    <div className="job-site">
      {job && (
        <div className="jobsite-about">
          <div>
            <h1>{job.hits[0].headline}</h1>
            <h3>{job.hits[0].employer.name}</h3>
            <div className="jobsite-top">
              <p>
                <strong>Publiceringsdatum</strong>
              </p>
              <p>{job.hits[0].publication_date}</p>
            </div>
            <div className="jobsite-top">
              <p>
                <strong>Område</strong>
              </p>
              <p>{job.hits[0].workplace_address.municipality}</p>
            </div>
            <div className="jobsite-top">
              <p>
                <strong>Yrkesroll</strong>
              </p>
              <p>{job.hits[0].occupation.label}</p>
            </div>
            <div className="jobsite-top">
              <p>
                <strong>Typ av anställning</strong>
              </p>
              <p>{job.hits[0].working_hours_type.label}</p>
            </div>
          </div>
          <div
            className="jobsite-textcontent"
            dangerouslySetInnerHTML={{
              __html: job.hits[0].description.text_formatted,
            }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default JobSite;
