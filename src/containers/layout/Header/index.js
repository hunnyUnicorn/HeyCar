import './index.css';
import LogoIcon from '../../../components/common/Icons/LogoIcon'
import MenuIcon from '../../../components/common/Icons/MenuIcon'
import UserIcon from '../../../components/common/Icons/UserIcon'

const Header = (props) => {
  const {userName} = props;
  return (
    <div className='header'>
    <LogoIcon/>
    <MenuIcon/>
    <UserIcon name={userName}/>
    </div>
  );
}

export default Header;