import React from 'react'       //   React, { Component }   <-----------usin class based component
import { Link } from "react-router-dom";


// export class Navbar extends Component {     <------using class based component
const Navbar=()=>{

    // render() {              <-----------usin class based component
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid ">
                        <Link className="navbar-brand" to="/"><strong style={{color:'red'}}>IBC</strong> News</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">General</Link></li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/general">Home</Link></li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link></li>
                                
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>
        )
    // }     <-----------usin class based component
}

export default Navbar
