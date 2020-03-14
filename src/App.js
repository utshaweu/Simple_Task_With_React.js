import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ServiceSection from './components/ServiceSection/ServiceSection';
import ServiceSectionTwo from './components/ServiceSectionTwo/ServiceSectionTwo';
import Card from './components/Card/Card';


function App() {
  return (
    <Fragment>
      <ServiceSection/>
      <ServiceSectionTwo/>
      <Card/>
    </Fragment>
  );
}

export default App;
