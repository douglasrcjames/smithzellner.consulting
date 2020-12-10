import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';
import { HashLink as Link } from 'react-router-hash-link';

import SubscribeForm from '../misc/SubscribeForm';
import TextLinkGallery from '../misc/TextLinkGallery';

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

                <blockquote className="quote-card">
                    <cite>
                        <a 
                            href="https://blairpub.wordpress.com/2010/10/06/maya-angelou-shirley-sherrod-want-to-bring-zellner%e2%80%99s-wrong-side-of-murder-creek-to-the-big-screen/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-hover-green">
                            From Maya Angelou
                        </a>
                    </cite>
                    <p>
                        In an era of such strong polarization, where hate is again being accepted as a tolerable response to our fellow human beings, [Bob Zellner’s] story needs to be told; this story needs to be heard.
                    </p>
                </blockquote>
                <br/>
                <hr className="black-hr"/>
                
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
                                <p>We can provide both educational &amp; political consulting for your personal or business requirements.</p>
                            </Col>
                            <Col xs={12} sm={4}>
                                <img src={require("../../assets/images/icons/tour.png")} alt="tour" className="home-icon responsive center m-padding-t-b" />
                                <h3>Tour Guide</h3>
                                <p>We can come to your location and provide civil rights tours to various locations.</p>
                            </Col>
                        </Row>
                    </Grid>
                    <br/>
                </div>
                <div className="hero-container-2">
                    <div className="hero-image-2">
                        <div className="hero-text-2 center-text">
                            <h1 className="sm-margin-b"><i className="fas fa-calendar-alt"/>&nbsp; Upcoming Events</h1>
                            <div className="event-border">
                                <h3>
                                    <u>Hope in the Age of Social Inequality</u>
                                    <br/>
                                    Saturday, December 12th, 2020, 11am PT / 2pm EST
                                </h3>
                                
                                <p>
                                    This is a free webinar featuring speakers Sandy Hudson, Bob Zellner, Rana Abdelhamid, and Carolyn Casey. 
                                    Register online @ <a href="https://whoishussain.org/hope" target="_blank" rel="noopener noreferrer">whoishussain.org/hope</a>
                                    <br/>
                                    <TextLinkGallery text={"View flyer"} photo={{src: require('../../assets/images/misc/HopeWebinarPoster.png'), caption: "Hope in the Age of Social Inequality flyer" }}/>
                                </p>
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
