import { useEffect, useState } from 'react';
import { IconAngle } from '../../../assets/icon'

import './index.css'

function Selector(props) {
  const { values, width, setSelected } = props;
  const [ isOpen, setIsOpen ] = useState(false);
  const [ selectedIndex, setSelectedIndex ] = useState(0);

  useEffect( ()=> {
    setTimeout(() => {
      if ( isOpen ) {
        window.addEventListener('click', toggleDropdown);
      }
    }, 0)
  })

  const valueChanged = (newIndex) => {
    setSelectedIndex(newIndex);
    setSelected(values[newIndex].id);
    toggleDropdown();
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if ( isOpen ) {
      window.removeEventListener('click', toggleDropdown);
    }
  }
  return (
    <div className='dropdown' style={{width: width}}>
      <button onClick={toggleDropdown} className="dropdown-button">{values && values.length > 0 ? values[selectedIndex].name : null}
        <img src={IconAngle}></img>
      </button>
      {
        isOpen ?
        <div className="dropdown-content">
          {
            values.map( (value, index) => {
              return <a key={index} onClick={()=>{ valueChanged(index) }}>{value.name}</a>
            })
          }
        </div> : ''
      }
    </div>
  );
}

export default Selector;