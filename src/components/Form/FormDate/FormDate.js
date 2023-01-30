import PropTypes from 'prop-types';

function FormDate({ setMonth, setYear, setCvc }) {
  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
    // changeInfos(event.target.value, 'month');
  };
  const handleChangeYear = (event) => {
    setYear(event.target.value);
    // changeInfos(event.target.value, 'year');
  };
  const handleChangeCvc = (event) => {
    setCvc(event.target.value);
    // changeInfos(event.target.value, 'cvc');
  };

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
          onChange={handleChangeMonth}
          required
        />
        <input
          className="year"
          type="number_format"
          name="year"
          minLength="2"
          maxLength="2"
          placeholder="YY"
          onChange={handleChangeYear}
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
          onChange={handleChangeCvc}
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
