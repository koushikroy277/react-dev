import React from "react";
import "../FileCSS/About.css";
import video from "../resource/video.mp4";
import model1 from "../resource/woman-wearing-black-off-shoulder-long-sleeved-top-1436298.jpg";
import model2 from "../resource/woman-wearing-black-v-neck-top-3209624.jpg";
import model3 from "../resource/womanpic.jpg";
import office1 from "../resource/office.jpg";
import office2 from "../resource/office2.jpg";
import office3 from "../resource/office3.jpg";
import office4 from "../resource/office4.jpg";
import Slider from '../FileJS/Slider';
import Nav from '../FileJS/Nav';

export default function About() {
  
  return (
    <>
    <header>
      <Nav/>
    </header>
      <div className="container-fluid-lg about">
        <div className="row">
          <div className="col-md-12 about-elem">
            <div className="about-bg">
              <div className="second-bg">
                <h1 data-aos="fade-right">Design & creativity are ecstatic </h1>
              </div>
            </div>

            <section className="about-vid" data-aos="fade-left">
              <h1>Know About Our Organization</h1>
              <video src={video} loop controls width="70%" />
            </section>

            <section className="about-head" data-aos="fade-right">
              <h1>What do we actually do?</h1>
              <p>
                When talking about interiors, there's a lot of creativity
                included. So, all the clients out there will be searching such
                designers who have impeccable color choices and mesmerizing
                designs. <br />
                <br />
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="emp">
        <h1>Meet our aliances</h1>
        <div className="worker">
          <div className="img-div" data-aos="fade-in">
            <img src={model1} alt="employee" />
            <h1>Leena Hogg</h1>
            <p>
              Efficient Designer & incredible color choices. Have done a
              hundreds of projects that made customers satisfy
            </p>
          </div>
          <div className="img-div" data-aos="fade-in">
            <img src={model2} alt="employee" />
            <h1>Misshele Josh</h1>
            <p>
              Skilled craftswoman & sublime textures. Have done a hundreds of
              projects that made customers satisfy
            </p>
          </div>
          <div className="img-div" data-aos="fade-in">
            <img src={model3} alt="employee" />
            <h1>Sara Jain</h1>
            <p>
              Maintans our finances skillfully and have a lot of contribution in
              the marketing sector of our organization too. Have done a hundreds
              of marketing & advertising projects
            </p>
          </div>
        </div>
      </div>
      <section className="office" data-aos="fade-right">
        <div className="office-head">
          <h1>Our office is our family </h1>
          <Slider 
          imgsrc1={office1}
          imgsrc2={office2}
          imgsrc3={office3}
          imgsrc4={office4}/>
        </div>
      </section>
    </>
  );
}
