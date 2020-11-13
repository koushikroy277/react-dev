import React from 'react';
import { NavLink } from 'react-router-dom';
import '../FileCSS/Contact.css';
import Nav from '../FileJS/Nav';

export default function Contact() {
    return (
        <>
            <Nav/>
            <div className="contact">
            <div className="main-contact">
                <span className="con-header">
                    <h1>Contact Information</h1>
                    <p>Any question or remarks? Just write us a message</p>
                </span>
                <div className="container-fluid-lg contact">
                    <div className="row con-row">
                        <div className="col-lg-4 con-sect1">
                            <div className="sect1-info">
                                <h1>Contact Information</h1>
                                <p>Fill the form and our team will get back to you</p>
                            </div>
                            <div className="sect1-info2">
                                <h3><i className="fa fa-phone" aria-hidden="true"/>+880-1922-196-919</h3>
                                <h3><i class="fa fa-envelope" aria-hidden="true"/>roykoushik275@gmail.com</h3>
                                <h3><i className="fa fa-map-marker" aria-hidden="true"/>9/A, West Dhanmondi, Dhaka-1209</h3>
                            </div>
                            <div className="social">
                                <NavLink to="#">
                                <i class="fa fa-facebook-official" aria-hidden="true" />
                                </NavLink>
                                <NavLink to="#">
                                <i class="fa fa-instagram" aria-hidden="true" />
                                </NavLink>
                                <NavLink to="#">
                                <i class="fa fa-twitter" aria-hidden="true" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-8 con-sect2">
                            <form>
                                <input type="text" placeholder="First Name"
                                id="first"/>
                                <input type="text" placeholder="Last Name"
                                id="last"/><br/>
                                <input type="email" placeholder="Email" id="email"/>
                                <input type="tel" placeholder="Phone" id="tel"/><br/>
                                <label>Birth Date</label><br/>
                                <input type="date"
                                placeholder="Birth Date"
                                id="birth"/><br/>
                                <input type="radio" id="male"
                                name="gender"
                                value="male"/>
                                <label for="male">Male </label>
                                <input type="radio" id="female"
                                name="gender"
                                value="female"/>
                                <label for="female">Female </label>
                                <input type="radio" id="others"
                                name="gender"
                                value="others"/>
                                <label for="others">Others </label><br/>

                                <textarea placeholder="Write a message"></textarea><br/>
                                <input type="submit" role="button" id="btn"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
