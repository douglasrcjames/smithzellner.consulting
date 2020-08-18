import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export default class Events extends Component {
    render() {
        return (
            <div className="wrapper">
                <Helmet>
                    <title>Events | Smith-Zellner Consulting</title>
                </Helmet>
                <h1>Events</h1>

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
                    Registrants will receive viewing instructions one day in advance of conversations and then one hour before each conversation.  Sign up below!
                </p>
                    
                <div> 
                    <a href="https://www.eventbrite.com/e/george-wallace-donald-trump-conversations-with-american-hero-bob-zellner-tickets-114193064530" target="_blank" rel="noopener noreferrer">
                        <button className="s-btn-success" type="button">Sign Up at EventBrite</button>
                    </a>
                </div>

                <br/>
                <hr/>
                <br/>

                <h3>
                    <u>SPEAKING ENGAGEMENT</u>
                    <br/>
                    November 21-23
                </h3>
                
                <p>Bob Zellner will have a discussion around his life's work and his movie Son of the South.</p>    
                <p>To book, contact Dustin L. Jones, Keppler Speaking Agency at <u>djones@kepplerspeakers.com</u> or (703) 516-4000</p>
                <p>For more information, please call St. Francis Springs at (336) 573-3751</p> ​

               
                
            </div>
        )
    }
}
