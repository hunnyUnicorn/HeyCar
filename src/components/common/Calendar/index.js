import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import {IconCalendar} from '../../../assets/icon';
import './index.css'

function CustomCalendar(props) {
  const { name, onChange } = props;
  const [ isOpen, setIsOpen ] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateString, setDateString] = useState('');

  const dateChanged = (newValue) => {
    setDate(newValue);
    onChange(dateToString(newValue));
    setDateString(dateToString(newValue));
  }
  useEffect( ()=> {
    setTimeout(() => {
      if ( isOpen ) {
        window.addEventListener('click', toggleCalendar);
      }
    }, 0)
  })

  const toggleCalendar = (e) => {
    if ( e.target.matches('.react-calendar *') ) {
      return;
    }
    setIsOpen(!isOpen);
    if ( isOpen ) {
      window.removeEventListener('click', toggleCalendar);
    }
  }

  const dateToString = (date) => {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    return year + '-' + (month > 9 ? month : ('0' + month)) + '-' + (day > 9 ? day : ('0' + day));
  }

  return (
    <div className='calendar'>
      <button onClick={toggleCalendar} className="calendar-button">{dateString ? dateString : name}
        <img src={IconCalendar}></img>
      </button>
      {
        isOpen ? <Calendar onChange={dateChanged} value={date} disabled={{}} /> : ''
      }
    </div>
  );
}

export default CustomCalendar;