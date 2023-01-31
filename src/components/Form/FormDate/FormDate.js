import PropTypes from 'prop-types';

function FormDate({ setMonth, setYear, setCvc }) {
  return (
    <div className="date">
      <label className="exp-date">
        <p>exp.date (mm/yy)</p>
        <input
          className="month"
          type="number_format"
          name="month"
          minLength="2"
          maxLength="2"
          placeholder="MM"
          onChange={(event) => {
            setMonth(event.target.value);
          }}
          required
        />
        <input
          className="year"
          type="number_format"
          name="year"
          minLength="2"
          maxLength="2"
          placeholder="YY"
          onChange={(event) => {
            setYear(event.target.value);
          }}
          required
        />
      </label>

      <label className="cvc">
        <p>cvc</p>
        <input
          type="number_format"
          name="cvc"
          minLength="3"
          maxLength="3"
          placeholder="123"
          onChange={(event) => {
            setCvc(event.target.value);
          }}
          required
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
