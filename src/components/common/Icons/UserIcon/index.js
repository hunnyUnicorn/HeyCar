import './index.css'

const UserIcon = (props) => {
  const { name } = props;
  let shortName = '';
  name.split(' ').forEach( word => {
    shortName += word[0];
  });
  return (
    <div>
      <div className='user-icon'><p>{shortName}</p></div>
      <div className='user-name'>{name}</div>
    </div>
  );
}

export default UserIcon;