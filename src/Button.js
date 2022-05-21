import './App.css';

function Button(props) {
  return (
    <input type="button" className='button' value={props.value} onClick={()=>props.buttonClick(props.value)}/>
  );
}

export default Button;
