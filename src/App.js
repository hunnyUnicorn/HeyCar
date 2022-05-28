import MainLayout from './containers/layout/MainLayout'
import ContentLayout from './containers/layout/ContentLayout'
import Sidebar from './containers/layout/Sidebar'
import Header from './containers/layout/Header'
import Footer from './containers/layout/Footer'
import './App.css'

function App() {
  return (
    <div>
      <Header/>
      <MainLayout>
        <Sidebar/>
        <ContentLayout>

        </ContentLayout>
      </MainLayout>
      <Footer/>
    </div>
  );
}

export default App;
