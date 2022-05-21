import './App.css';

function ResultField(props) {
  return (
    <input type="text" className='result-field' value={props.result} onChange={(e)=> console.log(e.target.value)}  />
  );
}

export default ResultField;
