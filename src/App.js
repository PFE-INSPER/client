import React from "react";
// import logo from './logo.svg';
import './App.css';
import { Header, Footer, Jumbotron, Code, Tabs,} from 'watson-react-components';

function App() {

  React.useEffect(() => {
  }, []);

  return (
    <div>
      <Header
        mainBreadcrumbs="Home"
        mainBreadcrumbsUrl="/"

        hasWordmark={true}
      />
      <Jumbotron
        serviceName="PFE IBM-INSPER"
        repository="https://github.com/Insper/pfe_ibm_2021_2/tree/main"
        documentation="https://github.com/Insper/pfe_ibm_2021_2/blob/main/README.md"
        apiReference="https://github.com/Insper/pfe_ibm_2021_2"
        startInBluemix="https://console.ng.bluemix.net/registration/?target=/catalog/services/visual-recognition/"
        version="Beta"
        serviceIcon="images/service-icon.svg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <div className="Body">
      <div id="dash" /*style="font-size:medium"*/></div>
        {/* <div className="Chat">
        <input
          type="text"
        />

        </div> */}
      </div>      
      
      <div className="Footer">
      <Footer className="Footer" />
      </div>
    </div>
  );
}

export default App;
