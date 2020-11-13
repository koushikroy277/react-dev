import React from "react";
import "../FileCSS/Web.css";
import Nav from "../FileJS/Nav";
import Aside from "../FileJS/Aside";
import bath from "../resource/bathroom.jpg";
import { NavLink } from "react-router-dom";

export default function Web() {
    return (
        <>
        <header>
            <Nav />
        </header>
        <div className="container-fluid-lg">
        <div className="row gx-0">
        <section className="col-lg-8">
            <div className="title-element">

            <h1 className="title" data-aos="fade-right">
                <strong>We create</strong> more than<br/>
                just interior
            </h1>
            <div className="one-line" data-aos="fade-right">
            <NavLink to="#" id="learn">
                Learn More
                <i class="fa fa-long-arrow-right" aria-hidden="true" />
            </NavLink>
            <span className="social">
                <NavLink to="#">
                <i class="fa fa-facebook-official" aria-hidden="true" />
                </NavLink>
                <NavLink to="#">
                <i class="fa fa-instagram" aria-hidden="true" />
                </NavLink>
                <NavLink to="#">
                <i class="fa fa-twitter" aria-hidden="true" />
                </NavLink>
            </span>
            </div>
            </div>
            <div className="main-element" data-aos="fade-right">
            <img src={bath} alt="interior" />
            <span>
                <h1>Bathroom</h1>
                <p>
                Sophisticated, luxurious & decent hotel like washroom in your
                home. No more struggling with doing interiors now
                </p>
            </span>
            </div>
        </section>
        <section className="col-lg-4 asd" data-aos="fade-left">
            <Aside />
        </section>
        </div>
        </div>
        </>
    );
}
