import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ServiceSection from './components/ServiceSection/ServiceSection';
import ServiceSectionTwo from './components/ServiceSectionTwo/ServiceSectionTwo';


function App() {
  return (
    <Fragment>
      <ServiceSection/>
      <ServiceSectionTwo/>
    </Fragment>
  );
}

export default App;
