import PropTypes from 'prop-types';
import './Form.scss';
import FormName from './FormName/FormName';
import FormNumber from './FormNumber/FormNumber';
import FormDate from './FormDate/FormDate';

function Form({ setNumber, setName, setMonth, setYear, setCvc }) {
  return (
    <form action="" method="post">
      <FormName setName={setName} />
      <FormNumber setNumber={setNumber} />
      <FormDate setMonth={setMonth} setYear={setYear} setCvc={setCvc} />
      <button type="submit">Confirm</button>
    </form>
  );
}

Form.propTypes = {
  setName: PropTypes.func.isRequired,
  setNumber: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired,
  setCvc: PropTypes.func.isRequired,
};

export default Form;
