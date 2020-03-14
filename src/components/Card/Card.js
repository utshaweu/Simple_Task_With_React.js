import React, { Component, Fragment } from 'react';
import '../../assets/css/custom.css';

class Card extends Component {
  render() {
    return (
      <Fragment>
        <section id="Card">
          <div className="container">
            <div className="row">

              <div className="col-lg-4">
                <div className="Card">
                  <div className="CardImage"></div>
                  <div className="CardText">
                    <span className="Date">4 days ago</span>
                    <h2>Post one</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore et aliquam fuga, incidunt illum?</p>
                  </div>
                  <div className="CardStats">

                    <div className="row">
                      <div className="col-lg-4">
                        <div className="Sate">
                        <div className="Value">4<sup>m</sup></div>
                        <div className="Type">Read</div>
                        </div>
                     </div>
                    <div className="col-lg-4">
                      <div className="Sate Border">
                        <div className="Value">5213</div>
                        <div className="Type">Views</div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="Sate">
                        <div className="Value">32</div>
                        <div className="Type">Comments</div>
                      </div>
                    </div> 
                    </div>

                  </div>
                </div>

              </div>
              <div className="col-lg-4">
              <div className="Card">
                  <div className="CardImageTwo"></div>
                  <div className="CardText">
                    <span className="Date DateTwo">1 Week ago</span>
                    <h2>Post two</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore et aliquam fuga, incidunt illum?</p>
                  </div>
                  <div className="CardStats CatStatsTwo">

                    <div className="row">
                      <div className="col-lg-4">
                        <div className="Sate">
                        <div className="Value">7<sup>m</sup></div>
                        <div className="Type">Read</div>
                        </div>
                     </div>
                    <div className="col-lg-4">
                      <div className="Sate Border BorderTwo">
                        <div className="Value">7125</div>
                        <div className="Type">Views</div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="Sate">
                        <div className="Value">21</div>
                        <div className="Type">Comments</div>
                      </div>
                    </div> 
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-lg-4">
              <div className="Card">
                  <div className="CardImageThree"></div>
                  <div className="CardText">
                    <span className="Date DateThree">2 Week ago</span>
                    <h2>Post three</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore et aliquam fuga, incidunt illum?</p>
                  </div>
                  <div className="CardStats CardStatsThree">

                    <div className="row">
                      <div className="col-lg-4">
                        <div className="Sate">
                        <div className="Value">5<sup>m</sup></div>
                        <div className="Type">Read</div>
                        </div>
                     </div>
                    <div className="col-lg-4">
                      <div className="Sate Border BorderThree">
                        <div className="Value">3021</div>
                        <div className="Type">Views</div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="Sate">
                        <div className="Value">15</div>
                        <div className="Type">Comments</div>
                      </div>
                    </div> 
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

export default Card;