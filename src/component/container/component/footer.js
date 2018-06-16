import React, {Component} from 'react';


export default class Footer extends Component {
    render() {
        return (
            <div className="App">
                <footer>
                    <div className="footer-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="footer-content">
                                        <div className="footer-head">
                                            <div className="footer-logo">
                                                <h2><span>e</span>Book</h2>
                                            </div>

                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                                illo inventore veritatis.</p>
                                            <div className="footer-icons">
                                                <ul>
                                                    <li>
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-google"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-pinterest"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="footer-content">
                                        <div className="footer-head">
                                            <h4>information</h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor.
                                            </p>
                                            <div className="footer-contacts">
                                                <p><span>Tel:</span> +123 456 789</p>
                                                <p><span>Email:</span> contact@example.com</p>
                                                <p><span>Working Hours:</span> 9am-5pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="footer-content">
                                        <div className="footer-head">
                                            <h4>Instagram</h4>
                                            <div className="flicker-img">
                                                <a href="#"><img src="img/portfolio/1.jpg" alt=""/></a>
                                                <a href="#"><img src="img/portfolio/2.jpg" alt=""/></a>
                                                <a href="#"><img src="img/portfolio/3.jpg" alt=""/></a>
                                                <a href="#"><img src="img/portfolio/4.jpg" alt=""/></a>
                                                <a href="#"><img src="img/portfolio/5.jpg" alt=""/></a>
                                                <a href="#"><img src="img/portfolio/6.jpg" alt=""/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-area-bottom" style={{color:'white'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="copyright text-center">
                                        <p style={{color:'white'}}>
                                            © Copyright <strong>eBook</strong>. All Rights Reserved
                                        </p>
                                    </div>
                                    <div className="credits">

                                        Designed by <a href="https://abdullathanseeh.ga/">Abdulla Thanseeh</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}


