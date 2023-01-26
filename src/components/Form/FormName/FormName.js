import PropTypes from 'prop-types';

function FormName({ newName, setNewName, changeInfos }) {
  const handleChange = (event) => {
    setNewName(event.target.value);
    changeInfos(event.target.value, 'name');
  };
  return (
    <label>cardholder name
      <input
        type="text"
        name="name"
        placeholder="Jane Appleseed"
        value={newName}
        onChange={handleChange}
        required
      />
    </label>
  );
}

FormName.propTypes = {
  newName: PropTypes.string.isRequired,
  setNewName: PropTypes.func.isRequired,
  changeInfos: PropTypes.func.isRequired,
};

export default FormName;
