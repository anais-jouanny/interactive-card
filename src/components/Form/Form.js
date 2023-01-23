import './Form.scss';
import FormName from './FormName/FormName';
import FormNumber from './FormNumber/FormNumber';
import FormDate from './FormDate/FormDate';

function Form() {
  return (
    <form action="">
      <FormName />
      <FormNumber />
      <FormDate />
      <button type="submit">Confirm</button>
    </form>
  );
}

export default Form;
