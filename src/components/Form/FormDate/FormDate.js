function FormDate() {
  return (
    <div className="date">
      <label className="exp-date">
        <p>exp.date (mm/yy)</p>
        <input className="month" type="text" name="month" minLength="2" maxLength="2" placeholder="MM" required />
        <input className="year" type="text" name="year" minLength="2" maxLength="2" placeholder="YY" required />
      </label>

      <label className="cvc">
        <p>cvc</p>
        <input type="number" name="cvc" minLength="3" maxLength="3" placeholder="123" required />
      </label>
    </div>
  );
}

export default FormDate;
