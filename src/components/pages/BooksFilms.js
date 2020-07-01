import React, { Component } from 'react'

export default class BooksFilms extends Component {
    render() {
        return (
            <div className="wrapper">
                {/* TODO: add direct links to buy or see these */}
                <h1>Books &amp; Films</h1>
                <p>
                    <u>The Wrong Side of Murder Creek</u>: A white Southerner in the Freedom Movement, written by Bob Zellner
                    <br/>
                    <b>
                        <a href={`https://www.amazon.com/Wrong-Side-Murder-Creek-Southerner/dp/1588383946/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=`} rel="noopener noreferrer" target="_blank">
                        Buy on Amazon
                        </a>
                    </b>
                </p>

                <p>
                    <u>Son of the South</u>: A film based on the book, The Wrong Side of Murder Creek, is directed by Barry Alexander Brown and executive producer Spike Lee.
                    <ul>
                        <li>The Son of the South will be released sometime in the Fall of 2019.  In the meantime, enjoy the look book that describes the movie, the actors and the producers</li>
                        <li>Son of the SouthPart II: http://lvbxmag.com/2018/07/26/part-ii-son-of-the-south</li>
                        <li>Spike Lee Exec Producing Civil Rights Drama Son of the South: https://variety.com/2019/film/news/spike-lee-son-of-the-south-1203129386</li>
                    </ul>
                </p>
                
                <p><u>Woodcutters of the Southern Pines</u></p>
            </div>
        )
    }
}
