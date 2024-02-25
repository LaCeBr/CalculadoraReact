function CampoNumerico({ label, value, onChange }) {
  const handleInputChange = (event) => {
    onChange(parseInt(event.target.value));
  };

  return (
    <div>
      <label>
        {label}:
        <input type="number" value={value} onChange={handleInputChange} />
      </label>
    </div>
  );
}

export default CampoNumerico;
