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
                            <h1><i className="fas fa-calendar-alt"/>&nbsp; Upcoming Events</h1>
                            <div className="event-border">
                                <h3>
                                    <u>GEORGE WALLACE AND DONALD TRUMP</u>
                                    <br/>
                                    Conversations with American Hero Bob Zellner about Two Nation-Defining Demagogues
                                </h3>
                                
                                <div className="s-padding-t-b">
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
                                

                                <p>
                                    The conversations will be on Zoom live at 5 pm PDT time on the dates AND recorded for folks to watch via Zoom or Youtube on your own timing. 
                                    Registrants will receive viewing instructions one day in advance of conversations and then one hour before each conversation.  To register, here’s the signup:
                                </p>
                                    
                                <div> 
                                    <a href="https://www.eventbrite.com/e/george-wallace-donald-trump-conversations-with-american-hero-bob-zellner-tickets-114193064530" target="_blank" rel="noopener noreferrer">
                                        <button className="s-btn-success" type="button">Sign Up at EventBrite</button>
                                    </a>
                                </div>
                                   
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
