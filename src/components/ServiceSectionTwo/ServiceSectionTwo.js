import React, { Component, Fragment } from 'react';
import '../../assets/css/custom.css';
import Settings from '../../assets/images/setting.png';
import Database from '../../assets/images/database.png';
import Backup from '../../assets/images/backup.png';
import Protect from '../../assets/images/protect.png';
import Freessl from '../../assets/images/freessl.png';
import Speed from '../../assets/images/speed.png';

class ServiceSectionTwo extends Component {
  render() {
    return (
      <Fragment>
        <section id="Services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ServiceTitle">
                  <div className="Title">
                    <h2><span>Our</span> Services</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">

              <div className="col-lg-4">
                  <div className="ServicesBox">
                    <div className="Box">
                      <div className="SerBox">
                        <div className="Icons">
                        <img src={Settings} alt="settings"/>
                        </div>
                        <h4>Easy To Setup</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="col-lg-4">
                <div className="Box">
                  <div className="SerBox">
                    <div className="Icons">
                    <img src={Speed} alt="speed"/>
                    </div>
                    <h4>Fast Performance</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="ServicesBoxThree">
                  <div className="Box">
                    <div className="SerBox">
                      <div className="Icons">
                      <img src={Protect} alt="protect"/>
                      </div>
                      <h4>Privacy Protected</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="ServicesBoxFour">
                  <div className="Box">
                    <div className="SerBox">
                      <div className="Icons">
                      <img src={Backup} alt="backup"/>
                      </div>
                      <h4>Monthly Backup</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
              </div>

             <div className="col-lg-4">
              <div className="ServicesBoxFive">
                <div className="Box">
                    <div className="SerBox">
                      <div className="Icons">
                      <img src={Freessl} alt="freessl"/>
                      </div>
                      <h4>Free SSL Certificate</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
              </div>
             </div>

              <div className="col-lg-4">
                <div className="ServicesBoxSix">
                  <div className="Box">
                    <div className="SerBox">
                      <div className="Icons">
                      <img src={Database} alt="database"/>
                      </div>
                      <h4>Unlimited Database</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
      </Fragment>
    );
  }
}

export default ServiceSectionTwo;