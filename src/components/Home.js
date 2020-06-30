import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="hero-container-large">
                    <div className="hero-image-1">
                        <div className="hero-text">
                            <h1>Son of the South</h1>
                            <p>
                                Smith-Zellner Enterprise is to raise our collective consciousness by facilitating the healing of our racial and 
                                genocidal national history. Through the lens of our collective history, we aim to demonstrate how to respect 
                                differences of race, gender, religion and ideology. Listening to our neighbors and fellow citizens, searching for 
                                the common threads that bind us into this vibrant weave of many colors.
                            </p>
                            <button>Book Us</button>
                        </div>
                    </div>
                </div>

                <div className="l-container">
                    <h1>What We Offer</h1>
                    <ul>
                        <li>
                            Lectures      
                        </li>
                        <li>
                            Consulting - educational and political
                        </li>
                        <li>
                            Civil Rights tours as traveling Civil Rights activists
                        </li>
                    </ul>
                </div>
                <div className="hero-container-large">
                    <div className="hero-image-2">
                        <div className="hero-text">
                            <h1><i className="fas fa-calendar-alt"/>&nbsp; Upcoming Event</h1>
                            <div className="event-border">
                                <h3>
                                    <u>SPEAKING ENGAGEMENT</u>
                                    <br/>
                                    November 21-23
                                </h3>
                                <p>Bob Zellner will have a discussion around his life's work and his movie Son of the South.</p>    
                                <p>To book, contact Dustin L. Jones, Keppler Speaking Agency at <u>djones@kepplerspeakers.com</u> or (703)516-4000</p>
                                <p>For more information, please call St. Francis Springs at (336)573-3751</p> ​
                                {/* TODO: would be nice to book directly here instead of email, or at least send an email with nodemailer? */}
                                {/* <button>Book Now</button> */}
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <h1>What We Offer</h1>
                    <ul>
                        <li>
                        Lectures      
                        </li>
                        <li>
                        Consulting - educational and political
                        </li>
                        <li>
                        Civil Rights tours as traveling Civil Rights activists
                        </li>
                    </ul>
                </div>
                
               
            </div>
            
        )
    }
}
