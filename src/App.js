import './App.css';
import ResultField from './ResultField';
import Button from './Button';
import { useState } from 'react';
import EqualButton from './EqualButton';

function App() {

  const [result, setResult] = useState('0')
  const [lastOp, setLastOp] = useState(null)

  const buttonClick = (val) => {
    if (lastOp === "=") {
      result > 0 ? setResult(val) : setResult(result + val)
    } else {
      result === "0" ? setResult(val) : setResult(result + val)
    }
    
    setLastOp(null)
  }

  const handleOp = (op) => {
    if( lastOp === "+" || lastOp === "*") {
      return;
    } else {
      setResult(result + op)
      setLastOp(op)
    }
  }

  const calculate = (tokens) => {
    const operatorPrecedence = [
      {'*': (a,b) => a*b},
      {'+': (a,b) => a+b}
    ];
    let operator;
    for (const operators of operatorPrecedence) {
      const newTokens = [];
      for(const token of tokens) {
        if(token in operators) {
          operator = operators[token]
        } else if (operator) {
          newTokens[newTokens.length-1] = operator(newTokens[newTokens.length - 1],token)
          operator = null;
        } else {
          newTokens.push(token)
        }
      }
      tokens = newTokens;
    }
    if(tokens.length > 1) {
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

  const makeButton = (text, call) => {
    return <Button value={text} buttonClick={call} />
  }

  // [2,'+',3,'*',2]

  function tokenzie(text) {
    const r = []
    let token = ''
    for (const character of text) {
      if('+*'.indexOf(character) > -1) {
        r.push(parseFloat(token),character)
        token = ''
      } else {
        token += character
      }
    }
    if(token!== '') {
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
          {makeButton('9', buttonClick)}
          {makeButton('8', buttonClick)}
          {makeButton('7', buttonClick)}
          {makeButton('+', handleOp)}
        </div>

        <div className='buttons-line'>
          {makeButton('6', buttonClick)}
          {makeButton('5', buttonClick)}
          {makeButton('4', buttonClick)}
          {makeButton('*', handleOp)}
        </div>
        <div className='buttons-line'>
          {makeButton('3', buttonClick)}
          {makeButton('2', buttonClick)}
          {makeButton('1', buttonClick)}
          <EqualButton buttonClick={handleCalc} />
        </div>

        <div className='buttons-line'>
          {makeButton('0', buttonClick)}
        </div>


      </header>
    </div>
  );
}

export default App;
