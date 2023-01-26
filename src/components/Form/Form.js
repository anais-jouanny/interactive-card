import PropTypes from 'prop-types';
import './Form.scss';
import FormName from './FormName/FormName';
import FormNumber from './FormNumber/FormNumber';
import FormDate from './FormDate/FormDate';

function Form({ newNumber, setNewNumber, newName, setNewName, newMonth, setNewMonth, newYear, setNewYear, newCvc, setNewCvc, changeInfos }) {
  return (
    <form action="">
      <FormName newName={newName} setNewName={setNewName} changeInfos={changeInfos} />
      <FormNumber newNumber={newNumber} setNewNumber={setNewNumber} changeInfos={changeInfos} />
      <FormDate newMonth={newMonth} setNewMonth={setNewMonth} newYear={newYear} setNewYear={setNewYear} newCvc={newCvc} setNewCvc={setNewCvc} changeInfos={changeInfos} />
      <button type="submit">Confirm</button>
    </form>
  );
}

Form.propTypes = {
  newName: PropTypes.string.isRequired,
  setNewName: PropTypes.func.isRequired,
  newNumber: PropTypes.string.isRequired,
  setNewNumber: PropTypes.func.isRequired,
  newMonth: PropTypes.string.isRequired,
  setNewMonth: PropTypes.func.isRequired,
  newYear: PropTypes.string.isRequired,
  setNewYear: PropTypes.func.isRequired,
  newCvc: PropTypes.string.isRequired,
  setNewCvc: PropTypes.func.isRequired,
  changeInfos: PropTypes.func.isRequired,
};

export default Form;
