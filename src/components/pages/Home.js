import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

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
                                leaders in non-violent action, share our accounts of key events, and
                                teach people of opposing viewpoints how to work together. 
                            </p>
                            <Link to="/media"><button>Explore our works</button></Link>
                        </div>
                    </div>
                </div>
                <div className={"background-green s-padding-t-b"}>
                    <div className="l-width center-text center s-padding-t-b">
                        <h4 className="white"><i className="fa fa-award">&nbsp;</i> A.F.I. World Peace Initiative Award Recipient</h4>
                        <p className="white" style={{lineHeight: 1.2, marginTop: "10px"}}>
                            <i>Son of the South</i>, the movie adaptation of Bob Zellner's book, <i>The Wrong Side of Murder Creek</i>, recently received two awards from A.F.I. World Peace Initiative the main 
                            division of New Generation In Action which holds Special Consultative Status to the United Nations through United Nations Economic and Social Council. 
                            Barry Alexander Brown the director of “Son of the South” was awarded a Lifetime Achievement award for “Contribution to Film and Arts” and the film was 
                            awarded World Peace and Tolerance Narrative Feature Film.
                        </p>
                    </div>
                </div>
                <br/>
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
                                    <u>A.F.I. World Peace Initiative Award Ceremony</u>
                                    <br/>
                                    January 15th, 2021
                                </h3>
                                <p>
                                    <i>Son of the South</i>, the movie adaptation of Bob Zellner's book, <i>The Wrong Side of Murder Creek</i>, recently received two awards from A.F.I. World Peace Initiative the main 
                                    division of New Generation In Action which holds Special Consultative Status to the United Nations through United Nations Economic and Social Council. 
                                    Barry Alexander Brown the director of “Son of the South” was awarded a Lifetime Achievement award for “Contribution to Film and Arts” and the film was 
                                    awarded World Peace and Tolerance Narrative Feature Film.Both honors will be presented at the World Peace and Tolerance Gala on January 15th, 2021 (Martin Luther King Jr., Birthday) 
                                    the ceremony is a private virtual event.
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
