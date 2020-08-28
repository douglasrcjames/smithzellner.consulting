import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';
import { HashLink as Link } from 'react-router-hash-link';

import SubscribeForm from '../misc/SubscribeForm';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Smith-Zellner Consulting</title>
                </Helmet>
                <div className="hero-container-1">
                    <div className="hero-image-1">
                        <div className="hero-text-1 center-text">
                            <h1>Smith-Zellner Consulting</h1>
                            <p className="sm-margin-t-b">
                                We are available to lead civil rights history tours, train youth
                                leaders in non-violent action, share our accounts of key events &amp;
                                teach people of opposing viewpoints how to work together.
                            </p>
                            <Link to={`/about#Contact`} className="s-margin-t-b display-block"><button>Contact</button></Link>
                        </div>
                    </div>
                </div>
                <div className="background-black center-text">
                    <div className="white">
                        <Grid fluid>
                            <Row middle="sm">
                                <Col sm={12} md={4} lg={2} className="s-margin-t-b">
                                    <img src={require("../../assets/images/misc/maya2.jpg")} alt="bob zellner" className="medium rounded responsive" />
                                </Col>
                                <Col sm={12} md={8} lg={10} className="s-margin-t-b">
                                    <h4><i>Wrong Side of Murder Creek</i></h4>
                                    <p>“in an era of such strong polarization, where hate is again being accepted as a tolerable response to our fellow human beings, [Bob Zellner’s] story needs to be told; this story needs to be heard.”</p>
                                    <a 
                                        href="https://blairpub.wordpress.com/2010/10/06/maya-angelou-shirley-sherrod-want-to-bring-zellner%e2%80%99s-wrong-side-of-murder-creek-to-the-big-screen/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-hover-green grey">
                                        - Maya Angelou
                                    </a>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>

                <div className="l-container m-padding-t-b">
                    <h1>What We Offer</h1>
                    <Grid fluid>
                        <Row center="xs">
                            <Col xs={12} sm={4}>
                                <img src={require("../../assets/images/icons/presentation.png")} alt="presentation" className="small responsive center m-padding-t-b" />
                                <h3>Lectures</h3>
                                <p>We can come give a detailed lecture on civil rights for any event, big or small.</p>
                            </Col>
                            <Col xs={12} sm={4}>
                                <img src={require("../../assets/images/icons/conversation.png")} alt="conversation" className="small responsive center m-padding-t-b" />
                                <h3>Consulting</h3>
                                <p>We can provide both educational or political consulting for your personal or business requirements.</p>
                            </Col>
                            <Col xs={12} sm={4}>
                                <img src={require("../../assets/images/icons/tour.png")} alt="tour" className="small responsive center m-padding-t-b" />
                                <h3>Tour Guide</h3>
                                <p>We can come to your location and act as a traveling civil rights activists to tour any location.</p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div className="hero-container-2">
                    <div className="hero-image-2">
                        <div className="hero-text-2 center-text">
                            <h1 className="sm-margin-b"><i className="fas fa-calendar-alt"/>&nbsp; Upcoming Events</h1>
                            <div className="event-border">
                                <h2><i>Son of the South</i> Premiere: American Black Film Festival in Miami</h2>
                                <h4><u>When</u>: Wednesday, August 26, 2020; 8pm EST</h4>
                                <br/>
                                <hr/>
                                <br/>
                                <h3>
                                    Conversations with Bob Zellner on 2 Nation-Defining Demagogues
                                </h3>
                                <h4><u>When</u>:</h4>
                                <div>
                                    <b>Tuesday, Aug 4, 5 pm PDT:</b> “Wallace and Trump: Their Origin Stories”
                                </div>
                                <div>
                                    <b>Tuesday, Aug 11, 5 pm PDT:</b> “Wallace and Trump: Becoming Demagogues”
                                </div>
                                <div>
                                    <b>Tuesday, Aug 18, 5 pm PDT:</b> “Wallace and Trump: Their Racist Rhetoric”
                                </div>
                                <div>
                                    <b>Tuesday, Aug 25, 5 pm PDT:</b> “Wallace and Trump: Where Did/Do We Go From Here?”
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="wrapper center-text m-padding-t-b">
                    <h2 className="s-margin-t-b">Join the mailing list</h2>
                    <SubscribeForm />
                </div>
                
            </div>
            
        )
    }
}
