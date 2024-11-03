import React from 'react';
import ControlledForm from './ControlledForm';
import UncontrolledForm from './UncontrolledForm';
import DataFetcher from './DataFetcher';
import './App.css';

function App() {
  return (
    <div>
      <h1>React завдання</h1>
      <ControlledForm />
      <UncontrolledForm />
      <DataFetcher />
    </div>
  );
}

export default App;
