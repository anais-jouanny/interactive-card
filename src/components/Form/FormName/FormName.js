import PropTypes from 'prop-types';

function FormName({ setName }) {
  const handleChange = (event) => {
    setName(event.target.value);
    // changeInfos(event.target.value, 'name');
  };
  return (
    <label>cardholder name
      <input
        type="text"
        name="name"
        placeholder="Jane Appleseed"
        onChange={handleChange}
        required
      />
    </label>
  );
}

FormName.propTypes = {
  setName: PropTypes.func.isRequired,
};

export default FormName;
