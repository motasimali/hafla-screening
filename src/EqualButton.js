import './App.css';

function EqualButton(props) {
  return (
    <input type="button" className='button' value={'='} onClick={()=>props.buttonClick(parseInt(props.value))}/>
  );
}

export default EqualButton;
