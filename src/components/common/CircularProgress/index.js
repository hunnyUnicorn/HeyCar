import './index.css'

const CircularProgress = (props) => {
  const size = 20;
  const viewBox = `0 0 ${size} ${size}`;
  const strokeWidth = 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (75 * circumference) / 100;
  return (
    <div className='circular-progress'>
      <svg className='circular' viewBox={viewBox}>
        <circle
          fill='none'
          stroke='#ccc'
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          strokeDasharray={[dash, circumference - dash]}
          strokeLinecap='round'
          stroke='#011F4Baa'
        />
      </svg>
    </div>
  );
}

export default CircularProgress;