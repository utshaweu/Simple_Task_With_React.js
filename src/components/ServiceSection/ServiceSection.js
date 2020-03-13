import React, { Component,Fragment} from 'react';
import '../../assets/css/custom.css';
import ShapeOne from '../../assets/images/shape-one.svg';
import ShapeTwo from '../../assets/images/shape-two.svg';
import ShapeThree from '../../assets/images/shape-three.svg';
import ShapeFour from '../../assets/images/shape-four.svg';
import ShapeFive from '../../assets/images/shape-five.svg';

class ServiceSection extends Component {
  render() {
    return (
      <Fragment>
        <section id="cardArea">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6">
                <div className="cardSingle">
                  <div className="cardSingleItem text-center">
                    <div className="icon">
                     <i class="fa fa-folder-open" aria-hidden="true"></i>
                    </div>
                    <h3>Quick Setup</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga voluptatum dicta atque inventore accusantium!</p>
                  </div>
                  <img src={ShapeOne} className="hoverShapeOne hoverShape" alt="shape-one"/>
                  <img src={ShapeTwo} className="hoverShapeTwo hoverShape" alt="shape-two"/>
                  <img src={ShapeThree} className="hoverShapeThree hoverShape" alt="shape-three"/>
                  <img src={ShapeFour} className="hoverShapeFour hoverShape" alt="shape-four"/>
                  <img src={ShapeFive} className="hoverShapeFive hoverShape" alt="shape-five"/>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="cardSingle">
                  <div className="cardSingleItem Two text-center">
                    <div className="icon">
                    <i class="fa fa-desktop" aria-hidden="true"></i>
                    </div>
                    <h3>Lovely Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga voluptatum dicta atque inventore accusantium!</p>
                  </div>
                  <img src={ShapeOne} className="hoverShapeOne hoverShape" alt="shape-one"/>
                  <img src={ShapeTwo} className="hoverShapeTwo hoverShape" alt="shape-two"/>
                  <img src={ShapeThree} className="hoverShapeThree hoverShape" alt="shape-three"/>
                  <img src={ShapeFour} className="hoverShapeFour hoverShape" alt="shape-four"/>
                  <img src={ShapeFive} className="hoverShapeFive hoverShape" alt="shape-five"/>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="cardSingle">
                  <div className="cardSingleItem Three text-center">
                    <div className="icon">
                     <i class="fa fa-database" aria-hidden="true"></i>
                    </div>
                    <h3>Optimized Data</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga voluptatum dicta atque inventore accusantium!</p>
                  </div>
                  <img src={ShapeOne} className="hoverShapeOne hoverShape" alt="shape-one"/>
                  <img src={ShapeTwo} className="hoverShapeTwo hoverShape" alt="shape-two"/>
                  <img src={ShapeThree} className="hoverShapeThree hoverShape" alt="shape-three"/>
                  <img src={ShapeFour} className="hoverShapeFour hoverShape" alt="shape-four"/>
                  <img src={ShapeFive} className="hoverShapeFive hoverShape" alt="shape-five"/>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="cardSingle">
                  <div className="cardSingleItem Four text-center">
                    <div className="icon">
                     <i class="fa fa-list" aria-hidden="true"></i>
                    </div>
                    <h3>Secure Data</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fuga voluptatum dicta atque inventore accusantium!</p>
                  </div>
                  <img src={ShapeOne} className="hoverShapeOne hoverShape" alt="shape-one"/>
                  <img src={ShapeTwo} className="hoverShapeTwo hoverShape" alt="shape-two"/>
                  <img src={ShapeThree} className="hoverShapeThree hoverShape" alt="shape-three"/>
                  <img src={ShapeFour} className="hoverShapeFour hoverShape" alt="shape-four"/>
                  <img src={ShapeFive} className="hoverShapeFive hoverShape" alt="shape-five"/>
                </div>
              </div>



            </div>




            <div className="row">
              <div className="col-lg-12">
                <div className="loadMoreBtn text-center">
                  <a href="">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default ServiceSection;