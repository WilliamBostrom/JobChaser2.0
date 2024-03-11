import PropTypes from "prop-types";

function Form({ handleSelectChange, selectedLevel }) {
  return (
    <form>
      <label>
        <span>Välj nivå</span>
        <select onChange={handleSelectChange} value={selectedLevel}>
          <option value="Junior">Junior</option>
          <option value="Midweight">Midweight</option>
          <option value="Senior">Senior</option>
        </select>
      </label>
      <button type="submit">Sök</button>
    </form>
  );
}

Form.propTypes = {
  handleSelectChange: PropTypes.func.isRequired,
  selectedLevel: PropTypes.string.isRequired,
};

export default Form;
