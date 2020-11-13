import React from 'react';
import '../FileCSS/Project.css';
import Slider from '../FileJS/Slider';
import bed from '../resource/bed.jpg';
import livingroom from '../resource/livingroom.jpg';
import dining from '../resource/dining.jpg';
import kitchenroom from '../resource/kitchenroom.jpg';
import interiorDesign from '../resource/int-des1.jpg';
import interiorDesign2 from '../resource/int-des2.jpg';
import interiorDesign3 from '../resource/int-des3.jpg';
import ambassador from '../resource/brand-amba.png';
import AOS from 'aos';
AOS.init({
    duration: 1500
});


export default function project() {
    return (
        <>
            <div className="project">
                <span>
                    <h1>Some of our valued projects</h1>
                </span>
                <div className="project-img">
                    <div className="sect1" data-aos="fade-right">
                        <img src={interiorDesign2}  alt="picture"/>
                        <p>This was a complete re-innovation of the house</p>
                    </div>
                    <div className="sect2" data-aos="fade-left">
                        <img src={interiorDesign} alt="picture"/>
                        <p>The design of this interior astonished the client. He didn't believe his house can be re-innovated so beautifully</p>
                    </div> 
                    <div className="sect3">
                        <span className="sub-sect" >
                            <img src={interiorDesign3} alt="picture" data-aos="fade-right"/>
                            <img src={ambassador} alt="picture" className="model" data-aos="fade-left"/>
                        </span>
                        <p>We have some of the best & sublime renovation designs you'll hardly find anywhere.</p>
                    </div>             
                </div>
                <div className="slider">
                    <span>
                        <h1>A complete interior work </h1>
                    </span>
                    
                    <Slider className="carousel"
                    imgsrc1={bed}
                    imgsrc2={livingroom}
                    imgsrc3={dining}
                    imgsrc4={kitchenroom} />
                    
                </div>
            </div>
        </>
    )
}
