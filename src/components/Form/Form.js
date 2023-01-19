import './Form.scss';

function Form() {
  return (
    <form action="">

      <div className="name">
        <label>cardholder name
          <input type="text" name="name" placeholder="Jane Appleseed" required />
        </label>
      </div>

      <div className="number">
        <label>card number
          <input type="text" name="number" minlength="19" maxlength="19" placeholder="1234 5678 9123 0000" required />
        </label>
      </div>

      <div className="date">
        <label className="exp-date">
          <p>exp.date (mm/yy)</p>
          <input className="month" type="text" name="month" minlength="2" maxlength="2" placeholder="MM" required />
          <input className="year" type="text" name="year" minlength="2" maxlength="2" placeholder="YY" required />
        </label>

        <label className="cvc">
          <p>cvc</p>
          <input type="number" name="cvc" minlength="3" maxlength="3" placeholder="123" required />
        </label>
      </div>

      <button type="button">Confirm</button>
    </form>
  );
}

export default Form;
