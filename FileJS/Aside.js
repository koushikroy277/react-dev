import React from 'react';
import { NavLink } from 'react-router-dom';
import '../FileCSS/Aside.css';

export default function Aside() {
    return (
        <div className="container-fluid-lg">
            <div className="row gx-0 flex-column-reverse main-aside">        
                <div className="col-md-0 aside-element">
                    <span className="first">
                        <h1>16</h1>
                        <p>parametres to regulate in our mobile app</p>
                        <NavLink to="#">
                            <i class="fas fa-arrow-right" />
                        </NavLink>
                    </span>
                    <span className="second">
                        <h1>263</h1>
                        <p>Over 5 million Happy & Satisfied families</p>
                        <NavLink to="#">
                            <i class="fas fa-arrow-right" />
                        </NavLink>
                    </span>
                </div>
                <div className="col-md-12 Aside">
                </div>
            </div>
        </div>
    )
}
