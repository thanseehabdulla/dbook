import React, {Component} from 'react';
import './topbar.css'
import a from './../../../images/elogo.jpeg'


export default class Topbar extends Component {

    render() {
        return (
            <div className="">

                    <div id="sticker" className="header-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">

                                    <nav className="navbar navbar-default">
                                        <div className="navbar-header">
                                            <button type="button" className="navbar-toggle collapsed"
                                                    data-toggle="collapse" data-target=".bs-example-navbar-collapse-1"
                                                    aria-expanded="false">
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                            <a className="navbar-brand page-scroll sticky-logo" href="index.html">
                                                <img src={a} width={35} style={{display:'inline'}}/>
                                                <h1 style={{display:'inline'}}><span>e</span>Book</h1>
                                            </a>
                                        </div>
                                        <div className="collapse navbar-collapse main-menu bs-example-navbar-collapse-1"
                                             id="navbar-example">
                                            <ul className="nav navbar-nav navbar-right">
                                                <li className="">
                                                    <a className="page-scroll" href="#home">Home</a>
                                                </li>
                                                <li>
                                                    <a className="page-scroll" href="#about">About</a>
                                                </li>
                                                <li>
                                                    <a className="page-scroll" href="#services">Services</a>
                                                </li>
                                                <li>
                                                    <a className="page-scroll" href="#team">Team</a>
                                                </li>
                                                <li>
                                                    <a className="page-scroll" href="#portfolio">Portfolio</a>
                                                </li>
                                             
                                                <li>
                                                    <a className="page-scroll" href="#contact">Contact</a>
                                                </li>
                                                <a 
                                                 className="page-scroll loginBtn1 btnlog" href="/login">Login</a>
                                            </ul>
                                            
                                        </div>
                                    </nav>

                                </div>
                            </div>
                        </div>
                    </div>



            </div>
        );
    }
}


