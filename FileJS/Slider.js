import React from 'react';
import '../FileCSS/Slider.css';

export default function Slider(props) {
    return (
        <div className="slider">
            <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={props.imgsrc1} className="d-block w-100" alt="office-space" />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Office desk</h2>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={props.imgsrc2} className="d-block w-100" alt="office-space" />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Work space</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={props.imgsrc3} className="d-block w-100" alt="office-space" />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Office building</h2>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={props.imgsrc4} className="d-block w-100" alt="office-space" />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Office cafeteria</h2>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon prev-btn"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon next-btn"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
    )
}
