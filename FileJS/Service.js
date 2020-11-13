import React from "react";
import "../FileCSS/Service.css";
import Nav from '../FileJS/Nav';
import Project from '../FileJS/Project';

export default function Service() {
    return (
        <>
        <Nav/>
        <div className="service">
            <div className="serve-head">
                <div className="serve-item" id="serve-item1" data-aos="fade-up">
                    <h1>Service</h1>
                    <p>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.</p>
                </div>
                <div className="serve-item" id="serve-item2" data-aos="fade-left">
                    <h1>Interior Design</h1>
                    <p>We design your interior with our expert designers</p>
                </div>
                <div className="serve-item" id="serve-item3" data-aos="fade-left">
                    <h1>Budget Friendly</h1>
                    <p>You can easily re-innovate your houses with ecstatic design which is very much affordable</p>
                </div>
                <div className="serve-item" id="serve-item4" data-aos="fade-up">
                    <h1>Paying through installments</h1>
                    <p>This is the most rare service that any agencies could hardly give you</p>
                </div>
                <div className="serve-item" id="serve-item5" data-aos="fade-up">
                    <h1>Customer Care <br/>
                        service</h1>
                    <p>We care about our customers a lot. So, there's a customer care center of our agency where you can easily resove your queries
                    </p>
                </div>
                <div className="serve-item" id="serve-item6" data-aos="fade-up">
                    <h1>Our services at any corner of the country</h1>
                    <p>Even if you live in the farthest corner of the country, you'll get our service. And, we are  active in some foreign countries too
                    </p>
                </div>
                <div className="serve-item" id="serve-item7"data-aos="fade-left">
                    <h1>Payment method</h1>
                    <p>You can pay through Bkash, paytm, paypal, online banking, credit card, cash etc.
                    </p>
                </div>
            </div>
            <div className="project-sect" data-aos="fade-right">
                <Project/>
            </div>
        </div>
        </>
    );
}
