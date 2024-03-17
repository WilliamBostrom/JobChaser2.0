import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../components/hooks/useFetch";
import { useEffect, useState } from "react";
import { useTheme } from "../../components/hooks/useTheme";

// styles
import "./JobSite.css";

function JobSite() {
  const { id } = useParams();
  const [daysUntilDeadline, setDaysUntilDeadline] = useState(null);
  const { color } = useTheme();

  const url = `https://jobsearch.api.jobtechdev.se/search?q=${id}`;

  const { data: job } = useFetch(url);

  console.log(job);
  useEffect(() => {
    if (job) {
      const publicationDate = new Date();
      const applicationDeadline = new Date(job.hits[0].application_deadline);
      const differenceInTime =
        applicationDeadline.getTime() - publicationDate.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      setDaysUntilDeadline(differenceInDays);
    }
  }, [job]);

  const formatDeadlineDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("sv-SE", options);
  };

  const link = "http";

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
              <p>{job.hits[0].publication_date.slice(0, 10)}</p>
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
      <div className="jobsite-connect">
        <div className="img-center">
          <img
            src={
              job && job.hits[0].logo_url
                ? job.hits[0].logo_url
                : "/exempelbild.png"
            }
            alt={job && job.hits[0].headline}
          />
        </div>
        <div className="jobsite-text-btns">
          <h3>Sök jobbet</h3>
          <p>Ansök senast</p>
          <p>
            <strong>
              {job && formatDeadlineDate(job.hits[0].application_deadline)}
            </strong>
            {` (${daysUntilDeadline} dagar kvar)`}
          </p>
          <div className="button-container">
            <Link
              to={
                job && job.hits[0].website_url
                  ? job.hits[0].webpage_url
                  : "https://arbetsformedlingen.se"
              }
              target="_blank"
              style={{ background: color }}
              className="apply-now"
            >
              Ansök nu
              <img src="/link.svg" alt="link img" />
            </Link>

            <button className="save-now">
              <img src="/heart2.svg" />
              Spara
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSite;
