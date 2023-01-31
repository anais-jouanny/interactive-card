import PropTypes from 'prop-types';
import './Form.scss';
import FormName from './FormName/FormName';
import FormNumber from './FormNumber/FormNumber';
import FormDate from './FormDate/FormDate';
import Success from '../Success/Success';
import { useState } from 'react';

function Form({ setNumber, setName, setMonth, setYear, setCvc, final, setFinal }) {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(!success);
  };

  return (
    <main>
      {success ? (<Success final={final} setFinal={setFinal} />) : (
        <form action="" onSubmit={handleSubmit}>
          <FormName setName={setName} />
          <FormNumber setNumber={setNumber} />
          <FormDate setMonth={setMonth} setYear={setYear} setCvc={setCvc} />
          <button type="submit">Confirm</button>
        </form>
      )}
    </main>
  );
}

Form.propTypes = {
  setName: PropTypes.func.isRequired,
  setNumber: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired,
  setCvc: PropTypes.func.isRequired,
  final: PropTypes.bool.isRequired,
  setFinal: PropTypes.func.isRequired,
};

export default Form;
