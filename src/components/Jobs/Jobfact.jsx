import PropTypes from "prop-types";

function JobFact({ label, value }) {
  return (
    <div className="jobfact">
      <p>{label} </p>
      <p>{value}</p>
    </div>
  );
}

JobFact.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default JobFact;
