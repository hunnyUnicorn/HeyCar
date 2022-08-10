import './index.css';

const SidebarIcon = (props) => {
  return (
    <div className='sidebar-icon'>
      <img src={props.imageSource}/>
    </div>
  );
}

export default SidebarIcon;