import PropTypes from "prop-types";
import { useState } from "react";
import Avatar from "../Utility/Avatar";
import JobFact from "./Jobfact";

function JobsCard(props) {
  const [isMouseOver, setMouseOver] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setMouseOver(false); // Återställ färgen när du klickar på hjärtat
  };

  return (
    <article className="joblist">
      <div>
        <h2>{props.company}</h2>
        <Avatar img={props.img} alt={props.title} />
      </div>
      <div className="jobgrid">
        <div>
          <div>
            <JobFact label="Role:" value={props.role} />
            <JobFact label="Position:" value={props.position} />
            <JobFact label="Level:" value={props.level} />
          </div>
        </div>
        <div>
          <JobFact label="Location:" value={props.location} />
          <div>
            <JobFact label="Languages:" value={props.languages.join(", ")} />
            <JobFact label="Tools:" value={props.tools.join(", ")} />
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
          src={isMouseOver || isLiked ? "/liked-heart.svg" : "/like-heart.svg"}
          alt="Heart"
        />
      </a>
      <div className="job-btns">
        <button>Intresserad</button>
        <button>Ansök</button>
        <div className="jobstatus">
          Status <span></span>
        </div>
      </div>
      <p className="postedAt">{props.postedAt}</p>
    </article>
  );
}

JobsCard.propTypes = {
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  tools: PropTypes.array.isRequired,
  postedAt: PropTypes.string.isRequired,
};

export default JobsCard;

/* className="job-like-btn"
onMouseEnter={() => setMouseOver(true)}
onClick={handleLikeClick}
onMouseLeave={() => setMouseOver(false)}
>
<img
  src={isMouseOver || isLiked ? "/liked-heart.svg" : "/like-heart.svg"}
  alt="Heart"
/> */
