import { useEffect, useState } from 'react'
import './index.css'
import Selector from '../../../components/common/Selector'
import CustomCalendar from '../../../components/common/Calendar'
import Button from '../../../components/common/Button'

function Filter(props) {
  const {setSelectedProject, setSelectedGateway, setFromDate, setToDate, generateReport, projects, gateways} = props;

  return (
    <div className='filter'>
      <Selector width='135px'
        setSelected={setSelectedProject}
        values={projects}/>
      <Selector width='145px'
        setSelected={setSelectedGateway}
        values={gateways}/>
      <CustomCalendar onChange={setFromDate} name='From date'/>
      <CustomCalendar onChange={setToDate} name='To date'/>
      <Button name='Generate Report' onClick={generateReport}/>
    </div>
  );
}
export default Filter;