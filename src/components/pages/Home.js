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

                <blockquote class="quote-card">
                    <p>
                        In an era of such strong polarization, where hate is again being accepted as a tolerable response to our fellow human beings, [Bob Zellner’s] story needs to be told; this story needs to be heard.
                    </p>

                    <cite>
                        <a 
                            href="https://blairpub.wordpress.com/2010/10/06/maya-angelou-shirley-sherrod-want-to-bring-zellner%e2%80%99s-wrong-side-of-murder-creek-to-the-big-screen/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="l-text text-hover-green dark-grey">
                            From Maya Angelou
                        </a>
                    </cite>
                </blockquote>

                <div className="l-container sm-padding-t-b">
                    <h1>What We Offer</h1>
                    <Grid fluid>
                        <Row center="xs">
                            <Col xs={12} sm={4}>
                                <img src={require("../../assets/images/icons/presentation.png")} alt="presentation" className="home-icon responsive center m-padding-t-b" />
                                <h3>Lectures</h3>
                                <p>We can come give a detailed lecture on civil rights for any event, big or small.</p>
                            </Col>
                            <Col xs={12} sm={4}>
                                <img src={require("../../assets/images/icons/conversation.png")} alt="conversation" className="home-icon responsive center m-padding-t-b" />
                                <h3>Consulting</h3>
                                <p>We can provide both educational or political consulting for your personal or business requirements.</p>
                            </Col>
                            <Col xs={12} sm={4}>
                                <img src={require("../../assets/images/icons/tour.png")} alt="tour" className="home-icon responsive center m-padding-t-b" />
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
                                <h3>
                                    <u>SPEAKING ENGAGEMENT</u>
                                    <br/>
                                    Friday, November 20th - Sunday, November 22nd
                                </h3>
                                
                                <p>Bob Zellner will have a discussion around his life's work and his movie <i>Son of the South</i> at St. Francis Springs, Stoneville, North Carolina.</p> 
                                <p>For more information, please call St. Francis Springs at (336) 573-3751</p> 
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
