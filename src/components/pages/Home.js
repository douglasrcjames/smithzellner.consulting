import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { HashLink as Link } from 'react-router-hash-link';

import SubscribeForm from '../misc/SubscribeForm';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="hero-container-large">
                    <div className="hero-image-1">
                        <div className="hero-text center-text">
                            <h1>Smith-Zellner Consulting</h1>
                            <p>
                                Our goal is to raise our collective consciousness by facilitating the healing of our racial and 
                                genocidal national history. Through the lens of our collective history, we aim to demonstrate how to respect 
                                differences of race, gender, religion and ideology. Listening to our neighbors and fellow citizens, searching for 
                                the common threads that bind us into this vibrant weave of many colors.
                            </p>
                            <Link to={`/about#Contact`}><button>Contact</button></Link>
                        </div>
                    </div>
                </div>

                <div className="l-container m-padding-t-b">
                    <h1>What We Offer</h1>
                    <Grid fluid>
                        <Row center="xs">
                            <Col xs={12} sm={4}>
                                <img src={require("../../assets/images/icons/presentation.png")} alt="presentation" className="small responsive center m-padding-t-b" />
                                <h3>Lectures</h3>
                                <p>We can come give a detailed lecture on Civil Rights for your event.</p>
                            </Col>
                            <Col xs={12} sm={4}>
                                <img src={require("../../assets/images/icons/conversation.png")} alt="conversation" className="small responsive center m-padding-t-b" />
                                <h3>Consulting</h3>
                                <p>We can provide both educational or political consulting for your personal or business requirements.</p>
                            </Col>
                            <Col xs={12} sm={4}>
                                <img src={require("../../assets/images/icons/tour.png")} alt="tour" className="small responsive center m-padding-t-b" />
                                <h3>Tour Guide</h3>
                                <p>We can come to your location and act as a traveling Civil Rights activists to tour any location.</p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div className="hero-container-large">
                    <div className="hero-image-2">
                        <div className="hero-text center-text">
                            <h1><i className="fas fa-calendar-alt"/>&nbsp; Upcoming Event</h1>
                            <div className="event-border">
                                <h3>
                                    <u>SPEAKING ENGAGEMENT</u>
                                    <br/>
                                    November 21-23
                                </h3>
                                
                                <p>Bob Zellner will have a discussion around his life's work and his movie Son of the South.</p>    
                                <p>To book, contact Dustin L. Jones, Keppler Speaking Agency at <u>djones@kepplerspeakers.com</u> or (703) 516-4000</p>
                                <p>For more information, please call St. Francis Springs at (336) 573-3751</p> ​
                                {/* TODO: would be nice to book directly here instead of email, or at least send an email with nodemailer? */}
                                {/* <button>Book Now</button> */}
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div className="wrapper center-text m-padding-t-b">
                    <h2>Join the mailing list</h2>
                    <SubscribeForm />
                </div>
                
            </div>
            
        )
    }
}
