import { render } from '@testing-library/react';
import './index.css'

function ReportTable(props) {
  const { category, subCategory, data, projects, gateways, selectedProject, selectedGateway } = props;
  const renderTable = () => {
    let table;
    if ( selectedProject===undefined && selectedGateway===undefined ) {
      table = data !== undefined ?
      data.map( (project, index) => {
        return <div className='project' key={index}>
          <div className='project-title active'>
            <div className='project-name'>{project.projectId}</div>
            <div className='project-amount'>ToTAL</div>
          </div>
          {
            /*project !== undefined ?
            project.map( gateway => {
              return <div className='gateway forward'>
                  <div className='cell'>{gateway.date}</div>
                  <div className='cell'>{gateway.gatewayID}</div>
                  <div className='cell'>{gateway.transactionID}</div>
                  <div className='cell'>{gateway.amount}</div>
                </div>
            }) : ''*/
          }
          </div>
      }) : null;
    }
    else if ( selectedProject === undefined && selectedGateway !== undefined ) {
      
    }
    else if ( selectedProject !== undefined && selectedGateway === undefined ) {
      
    }
    else {

    }
    //   data !== undefined ?
    //   data.map( gateway => {
    //     return <div className='gateway forward'>
    //       <div className='cell'>{gateway.date}</div>
    //       <div className='cell'>{gateway.transactionID}</div>
    //       <div className='cell'>{gateway.amount}</div>
    //       </div>
    //   }) : ''
    // )
    return table;
  }
  return (
    <div className='report-table'>
      <div className='report-table-title'>{category + ' | ' + subCategory}</div>
      {
        renderTable()
      }
    </div>
  );
}

export default ReportTable;