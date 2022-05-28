import './index.css';
import CustomIcon from '../../../components/common/CustomIcon';
import { IconChart, IconCircleChart, IconComputer, IconPower, IconWindows } from '../../../assets/icon'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <CustomIcon imageSource={IconChart}/>
      <CustomIcon imageSource={IconCircleChart}/>
      <CustomIcon imageSource={IconComputer}/>
      <CustomIcon imageSource={IconPower}/>
      <CustomIcon imageSource={IconWindows}/>
    </div>
  );
}

export default Sidebar;