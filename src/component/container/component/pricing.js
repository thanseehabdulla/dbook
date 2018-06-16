import React, {Component} from 'react';


export default class Pricing extends Component {
    render() {
        return (
            <div className="App">
                <div id="pricing" className="pricing-area area-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="section-headline text-center">
                                    <h2>Pricing Table</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="pri_table_list">
                                    <h3>basic <br/> <span>$80 / month</span></h3>
                                    <ol>
                                        <li className="check">Online system</li>
                                        <li className="check cross">Full access</li>
                                        <li className="check">Free apps</li>
                                        <li className="check">Multiple slider</li>
                                        <li className="check cross">Free domin</li>
                                        <li className="check cross">Support unlimited</li>
                                        <li className="check">Payment online</li>
                                        <li className="check cross">Cash back</li>
                                    </ol>
                                    <button>sign up now</button>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="pri_table_list active">
                                    <span className="saleon">top sale</span>
                                    <h3>standard <br/> <span>$110 / month</span></h3>
                                    <ol>
                                        <li className="check">Online system</li>
                                        <li className="check">Full access</li>
                                        <li className="check">Free apps</li>
                                        <li className="check">Multiple slider</li>
                                        <li className="check cross">Free domin</li>
                                        <li className="check">Support unlimited</li>
                                        <li className="check">Payment online</li>
                                        <li className="check cross">Cash back</li>
                                    </ol>
                                    <button>sign up now</button>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="pri_table_list">
                                    <h3>premium <br/> <span>$150 / month</span></h3>
                                    <ol>
                                        <li className="check">Online system</li>
                                        <li className="check">Full access</li>
                                        <li className="check">Free apps</li>
                                        <li className="check">Multiple slider</li>
                                        <li className="check">Free domin</li>
                                        <li className="check">Support unlimited</li>
                                        <li className="check">Payment online</li>
                                        <li className="check">Cash back</li>
                                    </ol>
                                    <button>sign up now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


