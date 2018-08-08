import React, {Component} from 'react';
import './topbar.css'
import a from './../../../images/elogo.jpeg'


export default class Topbar extends Component {

    render() {
        return (
            <div className="">

                    <div id="sticker" className="header-area ">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12">

                                    <nav className="navbar navbar-default">
                                        <div className="navbar-header">
                                         
                                            <a className="navbar-brand page-scroll sticky-logo" href="index.html">
                                               <div style={{display:'flex'}}>
                                                <img src={a} width={35} height={35} style={{display:'inline',height:'35px'}}/>
                                                <h1 style={{display:'inline'}}>dBook</h1>
                                               </div>
                                            </a>
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


