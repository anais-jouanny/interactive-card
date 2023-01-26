import PropTypes from 'prop-types';

function FormNumber({ newNumber, setNewNumber, changeInfos }) {
  const handleChange = (event) => {
    setNewNumber(event.target.value);
    changeInfos(event.target.value, 'number');
  };

  return (
    <label>card number
      <input
        type="text"
        name="number"
        minLength="16"
        maxLength="16"
        placeholder="1234 5678 9123 0000"
        value={newNumber}
        onChange={handleChange}
        required
      />
    </label>
  );
}

FormNumber.propTypes = {
  newNumber: PropTypes.string.isRequired,
  setNewNumber: PropTypes.func.isRequired,
  changeInfos: PropTypes.func.isRequired,
};

export default FormNumber;
