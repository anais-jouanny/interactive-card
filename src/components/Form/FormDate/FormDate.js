import PropTypes from 'prop-types';

function FormDate({ setMonth, setYear, setCvc }) {
  return (
    <div className="date">
      <label className="exp-date">
        <p>exp.date (mm/yy)</p>
        <input
          className="month"
          id='month'
          type="text"
          name="month"
          minLength="2"
          maxLength="2"
          placeholder="MM"
          onChange={(event) => {
            setMonth(event.target.value);
          }}
          required
          pattern="[0-1]\d"
        />
        <input
          className="year"
          type="text"
          name="year"
          minLength="2"
          maxLength="2"
          placeholder="YY"
          onChange={(event) => {
            setYear(event.target.value);
          }}
          required
          pattern="[2]\d"
        />
      </label>

      <label className="cvc">
        <p>cvc</p>
        <input
          type="text"
          name="cvc"
          minLength="3"
          maxLength="3"
          placeholder="123"
          onChange={(event) => {
            setCvc(event.target.value);
          }}
          required
          pattern="\d{3}"
        />
      </label>
    </div>
  );
}

FormDate.propTypes = {
  setMonth: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired,
  setCvc: PropTypes.func.isRequired,
};

export default FormDate;
