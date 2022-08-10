import './index.css'
import CircularProgress from '../../components/common/CircularProgress';

function LoadingContainer() {
  return <div className='black-border'>
    <CircularProgress/>
  </div>
}

export default LoadingContainer;