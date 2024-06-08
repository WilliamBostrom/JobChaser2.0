import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { Link } from "react-router-dom";

interface AvatarProps {
  img: string;
}

interface JobFactProps {
  label: string;
  value: string;
}

interface JobsCardProps {
  num: number;
  id: string;
  company: string;
  position: string;
  img?: string;
  role: string;
  location?: string;
  languages?: string;
  contract: string;
  tools: string;
  postedAt: string;
  handleRemoveJob: (num: number) => void;
}

function Avatar({ img }: AvatarProps): JSX.Element {
  return <img className="circle-img" src={img} alt="avatar_img" />;
}

function JobFact({ label, value }: JobFactProps): JSX.Element {
  return (
    <div className="jobfact">
      {label && <p>{label} </p>}
      <p>{value}</p>
    </div>
  );
}

function JobsCard(props: JobsCardProps): JSX.Element {
  const [isMouseOver, setMouseOver] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

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
          <Avatar img={props.img ? props.img : "/exempelbild.png"} />
        </div>
        <div className="jobgrid">
          <div>
            <JobFact label="" value={props.company} />
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
              background: isLiked ? "green" : "",
              color: isLiked ? "white" : "",
            }}
          >
            {isLiked ? "Favorit" : "Status"}
          </div>
        </div>
        <p className="postedAt">{props.postedAt.slice(0, 10)}</p>
      </li>
    </>
  );
}

export default JobsCard;
