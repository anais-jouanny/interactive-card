function FormNumber() {
  return (
    <label>card number
      <input type="text" name="number" minLength="19" maxLength="19" placeholder="1234 5678 9123 0000" required />
    </label>
  );
}

export default FormNumber;
