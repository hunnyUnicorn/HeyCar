import './index.css'

function Button(props) {
  const {name, onClick} = props;
  return (
    <button onClick={onClick} className='button'>
      {name}
    </button>
  );
}

export default Button;