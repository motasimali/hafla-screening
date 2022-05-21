import './App.css';

function EqualButton(props) {
  return (
    <input type="button" className='button' value={'='} onClick={()=>props.buttonClick()}/>
  );
}

export default EqualButton;
