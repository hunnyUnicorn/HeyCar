import './index.css'

function ErrorBar(props) {
  const { value } = props;
  return (
    <div className='error-bar'>
      {value}
    </div>
  );
}
export default ErrorBar;