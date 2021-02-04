import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet-async';
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
                <div className={"background-america-blue s-padding-t-b"}>
                    <div className="l-width center-text center s-padding-t-b">
                        <h4 className="white"><i>Son of the South</i> Official Release</h4>
                        <p className="white" style={{lineHeight: 1.2, marginTop: "10px"}}>
                            <i>Son of the South</i>, the movie adaptation of Bob Zellner's book, <i>The Wrong Side of Murder Creek</i>, will be officially 
                            released in select theaters and On Demand and Digital on Friday, February 5th, 2021.
                        </p>
                        <img src={require("../../assets/images/misc/SonofTheSouth-poster.jpg")} alt="son of the South Movie Poster" className="large responsive" />
                        <p className="white"><Link to="/media" className="light-blue">Checkout more details on the film!</Link></p>
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
                                    <u><i>Son of the South</i> Official Release</u>
                                    <br/>
                                    February 5th, 2021
                                </h3>
                                <p>
                                    <i>Son of the South</i>, the movie adaptation of Bob Zellner's book, <i>The Wrong Side of Murder Creek</i>, will be officially 
                                    released in select theaters and on demand/digital on Friday, February 5th, 2021. 
                                </p>
              
                                <label>Cable/Sat/Telco:</label> <span>Comcast, Directv, Cox, Charter / Time Warner, Dish, Verizon, Frontier, and smaller regional providers.</span>
                                <br/>
                                <label>Digital:</label> <span>Apple TV, iTunes, Amazon Video, VUDU, Google Play, Microsoft Movies &amp; TV, FandangoNow, and Redbox On Demand.</span>
                                <br/>
                                <b>Instagram:</b> <a href="https://www.instagram.com/sonofthesouthfilm/" target="_blank" rel="noopener noreferrer">@SonOfTheSouthFilm</a>
                                &nbsp;&nbsp;||&nbsp;&nbsp;
                                <b>Twitter:</b> <a href="https://twitter.com/sonofthesouthhd" target="_blank" rel="noopener noreferrer">@SonOfTheSouthHD</a>
                                <br/>
                                <a className="l-text" href={`https://www.youtube.com/watch?v=x0IjvDWw0i4&feature=youtu.be`} target="_blank" rel="noopener noreferrer">Son of the South | Official Trailer</a>
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
