import './index.css';

const CustomIcon = (props) => {
  return (
    <div className='custom-icon'>
      <img src={props.imageSource}/>
    </div>
  );
}

export default CustomIcon;