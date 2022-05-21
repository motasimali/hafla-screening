import './App.css';

function Button(props) {
  return (
    <input type="button" className='button' value={'1'} onClick={()=>props.buttonClick('1')}/>
  );
}

export default Button;
