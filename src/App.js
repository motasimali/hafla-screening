import './App.css';
import ResultField from './ResultField';
import Button from './Button';
import { useState } from 'react';
import EqualButton from './EqualButton';

function App() {

  const [result, setResult] = useState('0')
  const [lastOp, setLastOp] = useState(null)
  const operatorPrecedence = {
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  }
  const operators = Object.keys(operatorPrecedence)
  let buttonsArr = [
    '9', '8', '7',
    '6', '5', '4',
    '3', '2', '1',
    '0'
  ]
  const combinedArr = buttonsArr.concat(operators)



  const buttonClick = (val) => {
    if (lastOp === "=") {
      result > 0 ? setResult(val) : setResult(result + val)
    } else {
      result === "0" ? setResult(val) : setResult(result + val)
    }

    setLastOp(null)
  }

  const handleOp = (op) => {
    if (lastOp === "+" || lastOp === "*" || lastOp === '') {
      return;
    } else {
      setResult(result + op)
      setLastOp(op)
    }
  }

  const calculate = (tokens) => {
    let operator;
    const newTokens = [];
    for (const token of tokens) {
      if (token in operatorPrecedence) {
        operator = operatorPrecedence[token]
      } else if (operator) {
        newTokens[newTokens.length - 1] = operator(newTokens[newTokens.length - 1], token)
        operator = null;
      } else {
        newTokens.push(token)
      }
    }
    tokens = newTokens;
    if (tokens.length > 1) {
      console.log("Err");
      return tokens;
    } else {
      return tokens[0];
    }
  }
  const handleCalc = () => {
    setResult(calculate(tokenzie(result)))
    setLastOp("=")
  }

  const makeNumberButton = (text) => {
    return <Button key={text} value={text} buttonClick={buttonClick} />
  }

  const makeOpButton = (text) => {
    return <Button key={text} value={text} buttonClick={handleOp} />
  }

  // [2,'+',3,'*',2]

  function tokenzie(text) {
    const r = []
    let token = ''
    for (const character of text) {
      if (operators.indexOf(character) > -1) {
        r.push(parseFloat(token), character)
        token = ''
      } else {
        token += character
      }
    }
    if (token !== '') {
      r.push(parseFloat(token))
    }
    console.log(r)
    return r
  }


  return (
    <div className="App">
      <header className="App-header">
        <ResultField result={result} />
        <div className='buttons-line'>
          {combinedArr.map(val => {
            if (val === '+' || val === '*') {
              return makeOpButton(val)
            } else {
              return makeNumberButton(val)
            }
          }
          )}
          <EqualButton key="=" buttonClick={handleCalc} />
        </div>
      </header>
    </div>
  );
}

export default App;
