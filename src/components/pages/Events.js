import React, { Component } from 'react'

export default class Events extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Events</h1>
                <h3>
                    <u>SPEAKING ENGAGEMENT</u>
                    <br/>
                    November 21-23
                </h3>
                
                <p>Bob Zellner will have a discussion around his life's work and his movie Son of the South.</p>    
                <p>To book, contact Dustin L. Jones, Keppler Speaking Agency at <u>djones@kepplerspeakers.com</u> or (703) 516-4000</p>
                <p>For more information, please call St. Francis Springs at (336) 573-3751</p> ​

                <div className="center-text m-padding-t-b">
                    <h3>More events to be added soon!</h3>
                </div>
                
            </div>
        )
    }
}
