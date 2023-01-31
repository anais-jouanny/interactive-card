import PropTypes from 'prop-types';

function FormName({ setName }) {
  return (
    <label>cardholder name
      <input
        type="text"
        name="name"
        placeholder="Jane Appleseed"
        onChange={(event) => {
          setName(event.target.value);
        }}
        required
      />
    </label>
  );
}

FormName.propTypes = {
  setName: PropTypes.func.isRequired,
};

export default FormName;
