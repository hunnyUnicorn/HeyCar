import { useEffect, useState } from 'react'
import MainLayout from '../../containers/layout/MainLayout'
import ReportLayout from '../../containers/layout/ReportLayout'
import Sidebar from '../../containers/layout/Sidebar'
import Header from '../../containers/layout/Header'
import Footer from '../../containers/layout/Footer'
import Caption from '../../containers/Report/Caption'
import ErrorBar from '../../containers/Report/ErrorBar'
import Filter from '../../containers/Report/Filter'
import ReportTable from '../../components/ReportTable'
import {getUsers, getProjects, getGateways, getReports} from '../../api'
import './index.css'
import LoadingContainer from '../../containers/LoadingContainer'

function ReportPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState('');

  const [projects, setProjects] = useState([]);
  const [gateways, setGateways] = useState([]);
  const [reports, setReports] = useState([]);

  const [selectedProject, setSelectedProject] = useState('');
  const [selectedGateway, setSelectedGateway] = useState('');

  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  
  useEffect( ()=> {
    const init = async () => {
      setIsLoading(true);
      try {
        let users = await getUsers();
        users.data && users.data.length > 0 ?  setUser(users.data[0].firstName + ' ' + users.data[0].secondName) : setUser('');
      }
      catch (exception) {
        setErrorMessage('Unexpected error has occured while fetching user data')
      }
    
      try {
        let projectData = await getProjects();
        setProjects( prev => projectData );
      }
      catch (exception) {
        setErrorMessage('Unexpected error has occured while fetching project data');
      }
      
      try {
        let gatewayData = await getGateways();
        setGateways( prev => gatewayData );
      }
      catch (exception) {
        setErrorMessage('Unexpected error has occured while fetching gateway data');
      }
      setIsLoading(false);
    }
    init();
  }, []);

  const generateReport = async () => {
    setIsLoading(true);
    try {
      const reports = await getReports(fromDate, toDate, selectedProject, selectedGateway, projects, gateways);
      setReports(prev => reports);
    }
    catch (exception) {
      setErrorMessage('Unexpected error has occured while generating report data');
    }
    setIsLoading(false);
  }
  return (
    <div>
      {
        errorMessage ?
        <ErrorBar value={errorMessage}></ErrorBar> : null
      }
      {isLoading ? <LoadingContainer/> : null}
      <Header userName={user}/>
      <MainLayout>
        <Sidebar/>
        <ReportLayout>
          <Caption/>
          <Filter
            setSelectedProject={setSelectedProject}
            setSelectedGateway={setSelectedGateway}
            setFromDate={setFromDate}
            setToDate={setToDate}
            generateReport={generateReport}
            projects={projects}
            gateways={gateways}/>
          <div style={{clear: 'both'}}></div>
          <ReportTable
            category={projects && projects.length > 0 ? projects.find(project => project.id === selectedProject).name : null}
            subCategory={gateways && gateways.length > 0 ? gateways.find(gateway => gateway.id === selectedGateway).name : null}
            data={reports}
            projects={projects}
            gateways={gateways}
            selectedProject={selectedProject}
            selectedGateway={selectedGateway}/>
        </ReportLayout>
      </MainLayout>
      <Footer/>
    </div>
  );
}

export default ReportPage;
