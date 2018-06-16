import React, {Component} from 'react';
import a from './carousalimage/1.jpg'
import b from './carousalimage/2.jpg'
import c from './carousalimage/3.jpg'




export default class Carousal extends Component {
    render() {
        return (
            <div className="App carous">
                <div id="myCarousel" className="carousel" data-ride="carousel">
                

                    <div className="carousel-inner" >
                        <div className="item active" >
                            <img src={a} alt="Chania"/>
                                <div className="carousel-caption">
                                    <h1 style={{color:'white'}} className="headerfont">Get a <span style={{color:'#3ec1d5'}}>e</span>Book System</h1>
                                    <p style={{color:'white'}}><span style={{color:'#3ec1d5'}}>e</span>Book is your comprehensive platform to manage everything you need to sell and grow your business</p>
                         
                       
                            <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                              <a className="loginBtn1" href='#'>Getting Started</a>
                 &nbsp;           
                              <a className="loginBtn" href='#'>Request Demo</a>
                                </div>
                                </div>
                        </div>

                       

                       
                    </div>

                 
                </div>
            </div>
        );
    }
}


