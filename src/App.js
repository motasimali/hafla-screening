import './App.css';
import ResultField from './ResultField';
import Button from './Button';
import { useState } from 'react';
import EqualButton from './EqualButton';

function App() {

  const [result, setResult] = useState('0')
  const [computed, setComputed] = useState(false)

  const buttonClick = (val) => {
    if(computed) {
      setComputed(false)
      result > 0 ? setResult(val) : setResult(result + val)
    } else {
      result === "0" ? setResult(val) : setResult(result + val)
    }
    

  }

  const handleSum = () => {
    if (result.slice(-1) !== "+") {
      setResult(result + "+")
    }
  }

  const calculate = (val) => {
    const res = val.split("+");
    let computedVal = 0;

    for (let i = 0; i < res.length; i++) {
      computedVal = computedVal + parseInt(res[i])
    }
    computedVal = computedVal.toString()
    setResult(computedVal)
  }
  const handleCalc = () => {
      if (result.slice(-1) !== "+") {
        calculate(result)
      } else {
        calculate(result.slice(0, -1))
      }
      setComputed(true)
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
