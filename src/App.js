import './App.css';
import ResultField from './ResultField';
import Button from './Button';
import { useState } from 'react';
import EqualButton from './EqualButton';

function App() {

  const [result, setResult] = useState('0')

  const buttonClick = (val) => {

    setResult(result + val)
  }

  const handleSum = () => {
    if (result.slice(-1) !== "+") {
      setResult(result + "+")
    }
  }

  const handleCalc = () => {
    if (result.slice(-1) !== "+") {
      const res = result.split("+");
      if (res.length === 2) {
        setResult(parseInt(res[0]) + parseInt(res[1]))
      }
      if (res.length > 2) {
        let computedVal = 0;
        for (let i = 0; i < res.length; i++) {
          computedVal = computedVal + parseInt(res[i])
        }
        setResult(computedVal.toString())
      }
    }

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
          <EqualButton buttonClick={handleCalc} />
        </div>


      </header>
    </div>
  );
}

export default App;
