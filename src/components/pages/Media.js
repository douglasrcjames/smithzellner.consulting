import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet-async';

export default class Media extends Component {
    render() {
        return (
            <>
            <div className="wrapper" style={{paddingBottom: "20px"}}>
                <Helmet>
                    <title>Media | Smith-Zellner Consulting</title>
                </Helmet>
                <h1>Smith-Zellner Media</h1>
                <Grid fluid>
                <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/misc/SonofTheSouth-poster.jpg")} alt="presentation" className="large responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10}>
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="no-margin" style={{lineHeight: "0.5"}}><i>Son of the South</i></h2>
                                    <h3 className="no-margin">A film based on <i>The Wrong Side of Murder Creek</i></h3>
                                    <p>
                                        <i>Son of the South</i> is an American biographical drama film, written and directed by Barry Alexander Brown and with executive producer Spike Lee. 
                                        Based on Bob Zellner's autobiography, <i>The Wrong Side of Murder Creek</i>, it stars Lucas Till, Lucy Hale, 
                                        Lex Scott Davis, Julia Ormond, Cedric the Entertainer, Sharonne Lainer, Mike C. Manning, Brian Dennehy and Chaka Forman.
                                        The movie will officially be released on February 5th, 2021 on the following platforms:
                                    </p>
                                    <div className="center-text">
                                        <label>Cable/Sat/Telco:</label> <div>Comcast, Directv, Cox, Charter / Time Warner, Dish, Verizon, Frontier, and smaller regional providers.</div>
                                        <label>Digital:</label> <div>Apple TV, iTunes, Amazon Video, VUDU, Google Play, Microsoft Movies &amp; TV, FandangoNow, and Redbox On Demand.</div>
                                    </div>
                                    <br/>
                                    <p>
                                        The movie received two awards from A.F.I. World Peace Initiative the main division of New Generation In Action which holds Special Consultative Status to the 
                                        United Nations through United Nations Economic and Social Council. Barry Alexander Brown the director of “Son of the South” was awarded a Lifetime Achievement 
                                        award for “Contribution to Film and Arts” and the film was awarded World Peace and Tolerance Narrative Feature Film. Both honors were presented at the 
                                        World Peace and Tolerance Gala on January 18th, 2021 (Martin Luther King Jr., Birthday), a private virtual ceremony.
                                    </p>
                                    <br/>
                                    <label>Recent Media:</label>
                                    <ul>
                                        <li>
                                            <a href={`https://www.nytimes.com/2021/02/04/movies/son-of-the-south-review.html`} rel="noopener noreferrer" target="_blank">
                                                <u><i>Son of the South</i> Review: Tale of an Alabama Activist by the New York Times</u>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`https://www.usatoday.com/story/entertainment/movies/2020/08/27/son-south-how-klansmans-grandson-chose-do-right-thing/5647267002/`} rel="noopener noreferrer" target="_blank">
                                                <u><i>Son of the South</i> USA Today article</u>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`https://www.youtube.com/watch?v=sJeW9qSxPMs`} rel="noopener noreferrer" target="_blank">
                                                <u>WKRG <i>Son of the South</i> full interview with Bob Zellner</u>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`https://www.youtube.com/watch?v=gjg3_SnpAAQ`} rel="noopener noreferrer" target="_blank">
                                                <u>WKRG <i>Son of the South</i> excerpts from the interview with Bob Zellner</u>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`https://clearhorizonent.com/2020/06/21/son-of-the-south/`} rel="noopener noreferrer" target="_blank">
                                                <u>Clear Horizon <i>Son of the South</i> feature details</u>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`http://lvbxmag.com/2018/07/26/part-ii-son-of-the-south`} rel="noopener noreferrer" target="_blank">
                                                <u>LVBX Magazine feature: <i>Son of the South</i>: Part I</u>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`http://lvbxmag.com/2018/07/26/part-ii-son-of-the-south`} rel="noopener noreferrer" target="_blank">
                                                <u>LVBX Magazine feature: <i>Son of the South</i>: Part II</u>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`https://variety.com/2019/film/news/spike-lee-son-of-the-south-1203129386`} rel="noopener noreferrer" target="_blank">
                                                <u>Variety Magazine feature: Spike Lee Exec Producing Civil Rights Drama <i>Son of the South</i></u>
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row center="xs">
                                <Col xs={12} sm={3} className="s-margin-t-b">
                                    <a href={`https://www.instagram.com/sonofthesouthfilm/`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fab fa-instagram"/>&nbsp; Follow on Instagram </button>
                                    </a>
                                </Col>
                                <Col xs={12} sm={3} className="s-margin-t-b">
                                    <a href={`https://twitter.com/sonofthesouthhd`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fab fa-twitter"/>&nbsp; Follow on Twitter </button>
                                    </a>
                                </Col>
                                <Col xs={12} sm={3} className="s-margin-t-b">
                                    <a href={`https://www.imdb.com/title/tt2235372/`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-film"/>&nbsp; View IMDb </button>
                                    </a>
                                </Col>
                                <Col xs={12} sm={3} className="s-margin-t-b">
                                    <a href={`https://en.wikipedia.org/wiki/Son_of_the_South_(film)`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-book"/>&nbsp; View Wiki article </button>
                                    </a>
                                </Col>
                            </Row>
                            <Row middle="xs" center="xs" className="s-margin-t-b">
                                <Col xs={12} sm={6}>
                                    <a href="https://www.abff.com/" target="_blank" rel="noopener noreferrer">
                                        <img src={require("../../assets/images/misc/abff.jpg")} alt="American Black Film Festival" className="small responsive" />
                                    </a>
                                    <br/>
                                    <a href="https://www.abff.com/" target="_blank" rel="noopener noreferrer" className="black">
                                        <h4 className="no-margin">Premiered at the 2020 American Black Film Festival</h4>
                                    </a>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <a href="https://filmfreeway.com/AFIWorldPeaceInitiative" target="_blank" rel="noopener noreferrer">
                                        <img src={require("../../assets/images/misc/ngia.png")} alt="New Generation in Action" className="medium responsive" />
                                    </a>
                                    <a href="https://filmfreeway.com/AFIWorldPeaceInitiative" target="_blank" rel="noopener noreferrer" className="black">
                                        <h4 className="no-margin">A.F.I. World Peace Initiative Award recipient</h4>
                                    </a>
                                </Col>
                            </Row>
                            <Row className="m-width center" center="xs">
                                <h3>Son of the South Trailer</h3>
                                <div className="video-container">
                                    <iframe
                                        title="Son of the South Trailer"
                                        className="center-text"
                                        src="https://www.youtube.com/embed/x0IjvDWw0i4"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen="allowfullscreen"
                                        mozallowfullscreen="mozallowfullscreen" 
                                        msallowfullscreen="msallowfullscreen" 
                                        oallowfullscreen="oallowfullscreen" 
                                        webkitallowfullscreen="webkitallowfullscreen" />
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    
                </Grid>
            </div>
            <hr className="black-hr" />
            <div>
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
                        In an era of such strong polarization, where hate is again being accepted as a tolerable response to our fellow human beings, [Bob Zellner’s Wrong Side of Murder Creek] story needs to be told; this story needs to be heard.
                    </p>
                </blockquote>
            </div>
            <hr className="black-hr" />
            <div className="wrapper" style={{paddingTop: "0"}}> 
                <Grid fluid>
                <Row className="m-margin-t">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/misc/murder-creek-cover.jpg")} alt="book cover" className="large responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="no-padding" style={{lineHeight: "0.5"}}><i>The Wrong Side of Murder Creek:</i></h2>
                                    <h3><i>A White Southerner in the Freedom Movement</i></h3>
                                    
                                    <p>
                                        In his long-awaited memoir, Bob Zellner tells how - as a teenage, white, Alabama
                                        son and grandson of Ku Klux Klansmen – he changed his point of view and
                                        joined ranks with the black students who were sitting-in, marching, fighting and
                                        sometimes dying to challenge the “Southern way of life”. As the first white field
                                        secretary of SNCC (Student Nonviolent Coordinating Committee), Bob worked in
                                        many early civil rights campaigns close to all the major figures. Beaten, arrested,
                                        and reviled by some, he became admired by others. Decades later, Bob is still
                                        protesting on behalf of equal rights and social change. With co-author Constance
                                        Curry, Bob has recorded his remarkable memories and reflections of these
                                        historic events.
                                    </p>
                                </Col>
                            </Row>
                            <Row middle="xs" center="xs">
                                <Col xs={12} sm={3} className="s-margin-t-b">
                                    <Row end="sm" center="xs">
                                        <Col>
                                            <a href="https://www.libs.uga.edu/hargrett/lilliansmith/winners.html" target="_blank" rel="noopener noreferrer">
                                                <img src={require("../../assets/images/misc/LillianSmith.jpg")} alt="award" className="responsive" style={{ width: "75px"}} />
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} sm={6} className="s-margin">
                                    <Row start="xs">
                                        <Col>
                                            <a href="https://www.libs.uga.edu/hargrett/lilliansmith/winners.html" target="_blank" rel="noopener noreferrer" style={{ color: "#5c4bb4" }}>
                                                <h4 className="no-margin">Winner of 2009 Lillian Smith Book Award</h4>
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row center="xs">
                                <Col xs={12} sm={6} lg={4} className="s-margin-t-b">
                                    <a href={`https://www.amazon.com/Wrong-Side-Murder-Creek-Southerner/dp/1588383946/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-shopping-cart"/>&nbsp; Buy on Amazon</button>
                                    </a>
                                </Col>
                                <Col xs={12} sm={6} className="s-margin-t-b">
                                    <a href={`http://www.newsouthbooks.com/pages/category/wrong-side-of-murder-creek/`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-globe"/>&nbsp; Visit Publisher NewSouth Books</button>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                  
                    <hr/>
                    <br/>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/misc/letthepeopledecide.jpg")} alt="presentation" className="large responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="no-margin"><i>Let the People Decide</i></h2>
                                    <p>
                                        Bob Zellner is featured in this documentary and recommends it as a great film to watch about voting rights. 
                                        <i>Let the People Decide</i> traces the history of voting rights struggles in the United States from 1960 through the present day. 
                                        The film draws parallels between the Mississippi voter registration drive of the early 1960s and North Carolina's Moral Mondays
                                        movement in the present day. Now as then, both sides claim the moral high ground. In the 1960s, race was the clear driving force of the conflict; today the issue is couched 
                                        in claims of fraud and suppression. Political parties have drawn lines in the sand and this project will present arguments from all 
                                        sides in order that the film can live up to its name and <i>Let the People Decide</i>.
                                    </p>
                                </Col>
                            </Row>
                            <Row center="xs">
                                <Col sm={12} md={6} lg={4} className="s-margin-t-b">
                                    <a href={`https://www.imdb.com/title/tt7242544/`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-film"/>&nbsp; View IMDb </button>
                                    </a>
                                </Col>
                                <Col sm={12} lg={8} className="s-margin-t-b">
                                    <a href={`https://thefilmcollaborative.org/fiscalsponsorship/projects/letthepeopledecide`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success m-width" type="button"><i className="fas fa-book"/>&nbsp; Watch Trailer &amp; Read More </button>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
                <br/>
                <hr/>
                <br/>
                <div className="center m-width m-padding-b">
                    <h3>Bob Zellner remembers John Lewis</h3>
                    <div className="video-container">
                        <iframe
                            title="Bob Zellner remembers John Lewis"
                            className="center-text"
                            src="https://www.youtube.com/embed/td43TqqsKMI"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen="allowfullscreen"
                            mozallowfullscreen="mozallowfullscreen" 
                            msallowfullscreen="msallowfullscreen" 
                            oallowfullscreen="oallowfullscreen" 
                            webkitallowfullscreen="webkitallowfullscreen" />
                    </div>
                </div>
            </div>
            </>
        )
    }
}
