import PropTypes from 'prop-types';

function FormName({ newName, changeInfos }) {
  return (
    <label>cardholder name
      <input
        type="text"
        name="name"
        placeholder="Jane Appleseed"
        value={newName}
        onChange={(event) => {
          changeInfos(event.target.value, "name");
        }}
        required
      />
    </label>
  );
}

FormName.propTypes = {
  newName: PropTypes.string.isRequired,
  changeInfos: PropTypes.func.isRequired,
};

export default FormName;
