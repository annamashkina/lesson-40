import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Відправлено значення: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Неконтрольований ввод:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Надіслати</button>
    </form>
  );
}

export default UncontrolledForm;
