import './index.css';
import SidebarIcon from '../../../components/common/Icons/SidebarIcon';
import { IconChart, IconCircleChart, IconComputer, IconPower, IconWindows } from '../../../assets/icon'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarIcon imageSource={IconChart}/>
      <SidebarIcon imageSource={IconWindows}/>
      <SidebarIcon imageSource={IconComputer}/>
      <SidebarIcon imageSource={IconCircleChart}/>
      <SidebarIcon imageSource={IconPower}/>
    </div>
  );
}

export default Sidebar;