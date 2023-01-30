import PropTypes from 'prop-types';

function FormNumber({ setNumber }) {
  const handleChange = (event) => {
    setNumber(event.target.value);
    // changeInfos(event.target.value, 'number');
  };

  return (
    <label>card number
      <input
        type="number_format"
        name="number"
        minLength="16"
        maxLength="16"
        placeholder="0000000000000000"
        onChange={handleChange}
        required
      />
    </label>
  );
}

FormNumber.propTypes = {
  setNumber: PropTypes.func.isRequired,
};

export default FormNumber;
