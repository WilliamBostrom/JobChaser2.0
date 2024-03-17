import PropTypes from "prop-types";

function JobFact({ label, value }) {
  return (
    <div className="jobfact">
      {label && <p>{label} </p>}
      <p>{value}</p>
    </div>
  );
}

JobFact.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

export default JobFact;
