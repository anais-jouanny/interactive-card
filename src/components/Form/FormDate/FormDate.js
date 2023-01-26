function FormDate({ newMonth, setNewMonth, newYear, setNewYear, newCvc, setNewCvc, changeInfos }) {
  const handleChangeMonth = (event) => {
    setNewMonth(event.target.value);
    changeInfos(event.target.value, 'month');
  };
  const handleChangeYear = (event) => {
    setNewYear(event.target.value);
    changeInfos(event.target.value, 'year');
  };
  const handleChangeCvc = (event) => {
    setNewCvc(event.target.value);
    changeInfos(event.target.value, 'cvc');
  };

  return (
    <div className="date">
      <label className="exp-date">
        <p>exp.date (mm/yy)</p>
        <input
          className="month"
          type="text"
          name="month"
          minLength="2"
          maxLength="2"
          placeholder="MM"
          value={newMonth}
          onChange={handleChangeMonth}
          required
        />
        <input
          className="year"
          type="text"
          name="year"
          minLength="2"
          maxLength="2"
          placeholder="YY"
          value={newYear}
          onChange={handleChangeYear}
          required
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
          value={newCvc}
          onChange={handleChangeCvc}
          required
        />
      </label>
    </div>
  );
}

export default FormDate;
