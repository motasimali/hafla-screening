import './App.css';
import ResultField from './ResultField';
import Button from './Button';
import { useState } from 'react';

function App() {

  const [ result, setResult ] =  useState('0')

  const buttonClick = (val) => {
    setResult(val)
  }
  return (
    <div className="App">
      <header className="App-header">
        <ResultField result={result}/>
        <Button buttonClick={buttonClick}/>
      </header>
    </div>
  );
}

export default App;
