import PropTypes from "prop-types";
import { useState } from "react";
import Avatar from "../Utility/Avatar";
import JobFact from "./Jobfact";
import { useTheme } from "../hooks/useTheme";
import { Link } from "react-router-dom";

function JobsCard(props) {
  const [isMouseOver, setMouseOver] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDone, setDone] = useState(false);
  // const [readmore, setReadmore] = useState(false);

  const { mode } = useTheme();

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setMouseOver(false);
  };

  const handleClick = () => {
    props.handleRemoveJob(props.num);
  };

  return (
    <>
      <li className={`joblist ${mode}`}>
        <div className="company-name">
          <h2>{props.position}</h2>
        </div>
        <div>
          <Avatar
            img={props.img ? props.img : "/exempelbild.png"}
            alt={props.role}
          />
        </div>
        <div className="jobgrid">
          <div>
            <JobFact
              label=""
              value={props.company}
              className="joblist-position"
            />
            <JobFact label="" value={props.role} />
          </div>
          <div>
            {props.location && (
              <JobFact label="Plats:" value={props.location} />
            )}
            <div>
              {props.languages && (
                <JobFact label="Lön:" value={props.languages} />
              )}
              <JobFact label="Tjänst:" value={props.tools} />
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
              isMouseOver || isLiked ? "/heart_hover.svg" : "/heart_default.svg"
            }
            alt="Heart"
          />
        </a>
        <div className="job-btns">
          <button onClick={handleClick}>Ta bort</button>

          <Link
            className="btn"
            to={`/jobb/${props.id}`}
            onClick={() => {
              console.log(props.id);
            }}
          >
            Läs mer
          </Link>
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
        <p className="postedAt">{props.postedAt.slice(0, 10)}</p>
      </li>
    </>
  );
}

JobsCard.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  img: PropTypes.string,
  num: PropTypes.number,
  position: PropTypes.string.isRequired,
  level: PropTypes.string,
  location: PropTypes.string,
  languages: PropTypes.string,
  tools: PropTypes.string,
  postedAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleRemoveJob: PropTypes.func.isRequired,
};

export default JobsCard;
