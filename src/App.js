import './App.css';
import ResultField from './ResultField';
import Button from './Button';
import { useState } from 'react';

function App() {

  const [result, setResult] = useState('0')

  const buttonClick = (val) => {
    setResult(result + val)
  }

  const handleSum = () => {
    if (result.slice(-1) !== "+")
      setResult(result + "+")
  }
  return (
    <div className="App">
      <header className="App-header">
        <ResultField result={result} />
        <div className='buttons-line'>
          <Button value={'9'} buttonClick={buttonClick} />
          <Button value={'8'} buttonClick={buttonClick} />
          <Button value={'7'} buttonClick={buttonClick} />
        </div>

        <div className='buttons-line'>
          <Button value={'6'} buttonClick={buttonClick} />
          <Button value={'5'} buttonClick={buttonClick} />
          <Button value={'4'} buttonClick={buttonClick} />
        </div>
        <div className='buttons-line'>
          <Button value={'3'} buttonClick={buttonClick} />
          <Button value={'2'} buttonClick={buttonClick} />
          <Button value={'1'} buttonClick={buttonClick} />
        </div>

        <div className='buttons-line'>
          <Button value={'0'} buttonClick={buttonClick} />
          <Button value={'+'} buttonClick={handleSum} />
        </div>


      </header>
    </div>
  );
}

export default App;
