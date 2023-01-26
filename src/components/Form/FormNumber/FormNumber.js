function FormNumber({ newNumber, setNewNumber, changeInfos }) {
  const handleChange = (event) => {
    setNewNumber(event.target.value);
    changeInfos(event.target.value, 'number');
  };
  return (
    <label>card number
      <input
        type="text"
        name="number"
        minLength="19"
        maxLength="19"
        placeholder="1234 5678 9123 0000"
        value={newNumber}
        onChange={handleChange}
        required
      />
    </label>
  );
}

export default FormNumber;
