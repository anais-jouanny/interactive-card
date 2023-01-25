import PropTypes from 'prop-types';
import './Form.scss';
import FormName from './FormName/FormName';
import FormNumber from './FormNumber/FormNumber';
import FormDate from './FormDate/FormDate';

function Form({ newName, setNewName, changeInfos }) {
  return (
    <form action="">
      <FormName newName={newName} setNewName={setNewName} changeInfos={changeInfos} />
      <FormNumber />
      <FormDate />
      <button type="submit">Confirm</button>
    </form>
  );
}

Form.propTypes = {
  newName: PropTypes.string.isRequired,
  setNewName: PropTypes.func.isRequired,
  changeInfos: PropTypes.func.isRequired,
};

export default Form;
