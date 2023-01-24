import PropTypes from 'prop-types';
import './Form.scss';
import FormName from './FormName/FormName';
import FormNumber from './FormNumber/FormNumber';
import FormDate from './FormDate/FormDate';

function Form({ newName, changeInfos }) {
  return (
    <form action="">
      <FormName newName={newName} changeInfos={changeInfos} />
      <FormNumber />
      <FormDate />
      <button type="submit">Confirm</button>
    </form>
  );
}

Form.propTypes = {
  newName: PropTypes.string.isRequired,
  changeInfos: PropTypes.func.isRequired,
};

export default Form;
