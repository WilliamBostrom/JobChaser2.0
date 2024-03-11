import PropTypes from "prop-types";
import { useState } from "react";
import Avatar from "../Utility/Avatar";
import JobFact from "./Jobfact";

function JobsCard(props) {
  const [isMouseOver, setMouseOver] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDone, setDone] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setMouseOver(false);
  };

  const handleApplication = () => {
    setDone((prevValue) => {
      return !prevValue;
    });
  };

  const handleClick = () => {
    props.handleRemoveJob(props.id);
  };

  return (
    <article className="joblist">
      <div>
        <h2>{props.company}</h2>
        <Avatar img={props.img} alt={props.role} />
      </div>
      <div className="jobgrid">
        <div>
          <div>
            <JobFact label="Roll:" value={props.role} />
            <JobFact label="Position:" value={props.position} />
            <JobFact label="Level:" value={props.level} />
          </div>
        </div>
        <div>
          <JobFact label="Plats:" value={props.location} />
          <div>
            <JobFact label="Språk:" value={props.languages.join(", ")} />
            <JobFact label="Verktyg:" value={props.tools.join(", ")} />
          </div>
        </div>
      </div>

      <a
        className="job-like-btn"
        onMouseEnter={() => setMouseOver(true)}
        onClick={handleLikeClick}
        onMouseLeave={() => setMouseOver(false)}
      >
        <img
          src={
            isMouseOver || isLiked
              ? "https://jobb.blocket.se/img/huge_heart_hover.svg"
              : "https://jobb.blocket.se/img/huge_heart_default.svg"
          }
          alt="Heart"
        />
      </a>
      <div className="job-btns">
        <button onClick={handleClick}>Ta bort</button>
        <button onClick={handleApplication}>Ansök</button>
        <div
          className="jobstatus"
          style={{
            background: isDone ? "green" : "",
            color: isDone ? "white" : "",
          }}
        >
          Status
        </div>
      </div>
      <p className="postedAt">{props.postedAt}</p>
    </article>
  );
}

JobsCard.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired,
  postedAt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleRemoveJob: PropTypes.func.isRequired,
};

export default JobsCard;
