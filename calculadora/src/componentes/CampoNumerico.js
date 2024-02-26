function CampoNumerico({ label, value, onChange }) {
  const handleInputChange = (event) => {
    onChange(parseInt(event.target.value));
  };

  return (
    <label>
      {label}:
      <input type="number" value={value} onChange={handleInputChange} />
    </label>
  );
}

export default CampoNumerico;
