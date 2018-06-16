import React, {Component} from 'react';


export default class Faq extends Component {
    render() {
        return (
            <div className="App">
                <div className="faq-area area-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="section-headline text-center">
                                    <h2>Faq Question</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="faq-details">
                                    <div className="panel-group" id="accordion">
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="check-title">
                                                    <a data-toggle="collapse" className="active"
                                                       data-parent="#accordion" href="#check1">
                                                        <span className="acc-icons"></span>Consectetur adipisicing elit.
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="check1" className="panel-collapse collapse in">
                                                <div className="panel-body">
                                                    <p>
                                                        Redug Lefes dolor sit amet, consectetur adipisicing elit.
                                                        Aspernatur, tempore, commodi quas mollitia dolore magnam quidem
                                                        repellat, culpa voluptates laboriosam maiores alias accusamus
                                                        recusandae vero
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="check-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#check2">
                                                        <span className="acc-icons"></span> Dolore magnam quidem
                                                        repellat.
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="check2" className="panel-collapse collapse">
                                                <div className="panel-body">
                                                    <p>
                                                        Redug Lefes dolor sit amet, consectetur adipisicing elit.
                                                        Aspernatur, tempore, commodi quas mollitia dolore magnam quidem
                                                        repellat, culpa voluptates laboriosam maiores alias accusamus
                                                        recusandae vero aperiam sint nulla beatae eos.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="check-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#check3">
                                                        <span className="acc-icons"></span>Redug Lefes dolor sit.
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="check3" className="panel-collapse collapse ">
                                                <div className="panel-body">
                                                    <p>
                                                        Redug Lefes dolor sit amet, consectetur adipisicing elit.
                                                        Aspernatur, tempore, commodi quas mollitia dolore magnam quidem
                                                        repellat, culpa voluptates laboriosam maiores alias accusamus
                                                        recusandae vero aperiam sint nulla beatae eos.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <h4 className="check-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#check4">
                                                        <span className="acc-icons"></span>Maiores alias accusamus
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="check4" className="panel-collapse collapse">
                                                <div className="panel-body">
                                                    <p>
                                                        Redug Lefes dolor sit amet, consectetur adipisicing elit.
                                                        Aspernatur, tempore, commodi quas mollitia dolore magnam quidem
                                                        repellat, culpa voluptates laboriosam maiores alias accusamus
                                                        recusandae vero aperiam sint nulla beatae eos.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="tab-menu">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="active">
                                            <a href="#p-view-1" role="tab" data-toggle="tab">Project</a>
                                        </li>
                                        <li>
                                            <a href="#p-view-2" role="tab" data-toggle="tab">Planning</a>
                                        </li>
                                        <li>
                                            <a href="#p-view-3" role="tab" data-toggle="tab">Success</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="p-view-1">
                                        <div className="tab-inner">
                                            <div className="event-content head-team">
                                                <h4>Project</h4>
                                                <p>
                                                    Redug Lares dolor sit amet, consectetur adipisicing elit. Animi vero
                                                    excepturi magnam ducimus adipisci voluptas, praesentium maxime
                                                    necessitatibus in dolor dolores unde ab, libero quo. Aut, laborum
                                                    sequi.
                                                </p>
                                                <p>
                                                    voluptas, praesentium maxime cum fugiat,magnam ducimus adipisci
                                                    voluptas, praesentium architecto ducimus, doloribus fuga itaque
                                                    omnis placeat.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="p-view-2">
                                        <div className="tab-inner">
                                            <div className="event-content head-team">
                                                <h4>Planning</h4>
                                                <p>
                                                    voluptas, praesentium maxime cum fugiat,magnam ducimus adipisci
                                                    voluptas, praesentium architecto ducimus, doloribus fuga itaque
                                                    omnis.
                                                </p>
                                                <p>
                                                    Redug Lares dolor sit amet, consectetur adipisicing elit. Animi vero
                                                    excepturi magnam ducimus adipisci voluptas, praesentium maxime
                                                    necessitatibus in dolor dolores unde ab, libero quo. Aut.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="p-view-3">
                                        <div className="tab-inner">
                                            <div className="event-content head-team">
                                                <h4>Success</h4>
                                                <p>
                                                    voluptas, praesentium maxime cum fugiat,magnam ducimus adipisci
                                                    voluptas, praesentium architecto ducimus, doloribus fuga itaque
                                                    omnis placeat.
                                                </p>
                                                <p>
                                                    voluptas, praesentium maxime cum fugiat,magnam ducimus adipisci
                                                    voluptas, praesentium architecto ducimus, doloribus fuga itaque
                                                    omnis.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


