import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export default class Events extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            pastEventsShown: false
        }
    }

    togglePastEvents = () => {
        this.setState({pastEventsShown: !this.state.pastEventsShown})
    }
    
    render() {
        return (
            <div className="wrapper">
                <Helmet>
                    <title>Events | Smith-Zellner Consulting</title>
                </Helmet>
                <h1>Upcoming Events</h1>

                <h4>To book any event, please contact Dustin L. Jones, Keppler Speaking Agency at <u>djones@kepplerspeakers.com</u> or (703) 516-4000</h4>

                <hr/>
                <br/>

                <h3>
                    <u>SPEAKING ENGAGEMENT</u>
                    <br/>
                    Friday, November 20th - Sunday, November 22nd
                </h3>
                
                <p>Bob Zellner will have a discussion around his life's work and his movie <i>Son of the South</i> at St. Francis Springs, Stoneville, North Carolina.</p> 
                <p>For more information, please call St. Francis Springs at (336) 573-3751</p> ​




                <br/>
                <hr/>
                <br/>

                <div className="s-margin-b">
                    <button className={this.state.pastEventsShown ? "hide" : "s-btn-success-inv"} type="button" onClick={() => this.togglePastEvents()}><i className="fas fa-chevron-down"/>&nbsp; Show past events</button>
                    <button className={this.state.pastEventsShown ? "s-btn-success-inv" : "hide"}  type="button" onClick={() => this.togglePastEvents()}><i className="fas fa-chevron-up"/>&nbsp; Hide past events</button>
                </div>

                <div className={this.state.pastEventsShown ? "" : "hide"}>
                    <h1>Past Events</h1>
                    <hr/>
                    <br/>

                    <h2><i>Son of the South</i> to Premiere at American Black Film Festival</h2>

                    <h4><b>When</b>: Wednesday, August 26, 2020; 8pm EST</h4>

                    <div className="s-padding-t-b">
                        <h4>HOW TO SIGN FOR THE VIRTUAL ABFF:</h4>
                        <ol>
                            <li>Go to festival website at <a href="https://www.abff.com" target="_blank" rel="noopener noreferrer">www.abff.com</a>.</li>
                            <li>Follow the “Register Free Now” prompt.</li>
                            <li>Select “ Community Pass”.</li>
                            <li>Input Name, address etc.</li>
                            <li>Press submit and you’re on the platform.</li>
                            <li><i>Son of the South</i> will play live on the homepage at 8 pm EST and will be available for a total of four hours before it’s removed. We do this in case anyone joins the screening late, they’ll have the ability to start from the beginning.</li>
                        </ol>
                        <br/>
                        <h4>POST SCREENING Q&amp;A WILL TAKE PLACE ON INSTAGRAM, ON IGTV</h4>
                        <p>@barryalexanderbrown | @sonofthesouthfilm | @americanblackfilmfestival</p>
                    </div>

                    <br/>
                    <hr/>
                    <br/>

                    <h3>
                        <u>GEORGE WALLACE AND DONALD TRUMP</u>
                        <br/>
                        Conversations with Bob Zellner on 2 Nation-Defining Demagogues
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
                        
                    <div className="s-margin-t"> 
                        <a href="https://www.eventbrite.com/e/george-wallace-donald-trump-conversations-with-american-hero-bob-zellner-tickets-114193064530" target="_blank" rel="noopener noreferrer">
                            <button className="s-btn-success" type="button">Sign Up at EventBrite</button>
                        </a>
                    </div>
                    <br/>
                </div>
                
                
            </div>
        )
    }
}
