import './index.css'

const ContentLayout = (props) => {
  return (
    <div className='content-layout'>
      {props.children}
    </div>
  );
}

export default ContentLayout;