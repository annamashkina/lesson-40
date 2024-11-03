import React, { useState } from 'react';

function ControlledForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Відправлено значення: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Контрольований ввод:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Надіслати</button>
    </form>
  );
}

export default ControlledForm;