import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';

export default class Media extends Component {
    render() {
        return (
            <div className="wrapper">
                <Helmet>
                    <title>Media | Smith-Zellner Consulting</title>
                </Helmet>
                <h1>Smith-Zellner Media</h1>
                <Grid fluid>
                    <Row className="m-margin-t">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/misc/murder-creek-cover.jpg")} alt="presentation" className="medium responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className=""><i>The Wrong Side of Murder Creek: A White Southerner in the Freedom Movement</i></h2>
                                    <h4 className="no-margin">Winner of 2009 Lillian Smith Book Award</h4>
                                    <p>
                                        Even forty years after the civil rights movement, the transition from son and grandson of Klansmen to field secretary of SNCC seems quite a journey. 
                                        In the early 1960s, when Bob Zellner’s professors and classmates at a small church school in Alabama thought he was crazy for even wanting to do research 
                                        on civil rights, it was nothing short of remarkable. Now, in his long-awaited memoir, Zellner tells how a young, white Alabamian joined ranks with the black 
                                        students who were sitting-in, marching, fighting, and sometimes dying to challenge the Southern “way of life” he had been raised on but rejected. Decades 
                                        later, Bob is still protesting on behalf of social change and equal rights. Fortunately, he took the time, with co-author Constance Curry, to write down 
                                        his memories and reflections. He was in almost all the campaigns and was close to all the major figures. He was beaten, arrested, and reviled by 
                                        some but admired and revered by others.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={6} lg={4} className="s-margin-t-b">
                                    <a href={`https://www.amazon.com/Wrong-Side-Murder-Creek-Southerner/dp/1588383946/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-shopping-cart"/>&nbsp; Buy on Amazon</button>
                                    </a>
                                </Col>
                                <Col xs={12} sm={6} lg={4} className="s-margin-t-b">
                                    <a href={`http://www.newsouthbooks.com/pages/category/wrong-side-of-murder-creek/`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-globe"/>&nbsp; Visit Publisher NewSouth Books</button>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row middle="sm" className="center-text">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/misc/maya2.jpg")} alt="bob zellner" className="medium rounded responsive" />
                        </Col>
                        <Col sm={12} md={8} lg={10}>
                            <h4><i>Wrong Side of Murder Creek</i></h4>
                            <p>“in an era of such strong polarization, where hate is again being accepted as a tolerable response to our fellow human beings, [Bob Zellner’s] story needs to be told; this story needs to be heard.”</p>
                            <a 
                                href="https://blairpub.wordpress.com/2010/10/06/maya-angelou-shirley-sherrod-want-to-bring-zellner%e2%80%99s-wrong-side-of-murder-creek-to-the-big-screen/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-hover-green grey">
                                - Maya Angelou
                            </a>
                        </Col>
                    </Row>
                    <br/>
                    <hr/>
                    <br/>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/misc/son-of-the-south-tall.jpg")} alt="presentation" className="medium responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10}>
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="no-margin"><i>Son of the South</i></h2>
                                    <h3 className="no-margin">A film based on <i>The Wrong Side of Murder Creek</i></h3>
                                    <p>
                                        Premiered at the American Black Film Festival on August 26, 2020, <i>Son of the South</i> is an American biographical drama film, written and directed by Barry Alexander Brown and with executive producer Spike Lee. 
                                        Based on Bob Zellner's autobiography, <i>The Wrong Side of Murder Creek: A White Southerner in the Freedom Movement</i>, it stars Lucas Till, Lucy Hale, 
                                        Lex Scott Davis, Julia Ormond, Cedric the Entertainer, Sharonne Lainer, Mike C. Manning, Brian Dennehy and Chaka Forman.
                                    </p>
                                    <label>Recent Media:</label>
                                    <ul>
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
                            <Row>
                                <Col xs={12} sm={6} lg={4} className="s-margin-t-b">
                                    <a href={`https://www.imdb.com/title/tt2235372/`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-film"/>&nbsp; View IMDb </button>
                                    </a>
                                </Col>
                                <Col xs={12} sm={6} lg={4} className="s-margin-t-b">
                                    <a href={`https://en.wikipedia.org/wiki/Son_of_the_South_(film)`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-book"/>&nbsp; View Wiki article </button>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br/>
                    <hr/>
                    <br/>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/misc/letthepeopledecide.jpg")} alt="presentation" className="medium responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="no-margin"><i>Let the People Decide</i></h2>
                                    <p>
                                        Bob Zellner is featured in this documentary and would recommend it as a great film to watch about voting rights. 
                                    </p>
                                    <p>
                                        <i>Let the People Decide</i> traces the history of voting rights struggles in the United States from 1960 through the present day. 
                                        The film draws parallels between the Mississippi voter registration drive of the early 1960s and North Carolina's Moral Mondays
                                        movement in the present day. A key goal of the film is connecting the dots between the generations to contextualize the current 
                                        political environment surrounding race and voting. In three acts, the film will travel across nearly 60 years to show how the current 
                                        battles over voting are not a new front in the struggle over who gets to vote, but part of a continuing conflict that goes back many decades. 
                                        Now as then, both sides claim the moral high ground. In the 1960s, race was the clear driving force of the conflict; today the issue is couched is 
                                        couched in claims of fraud and suppression. Political parties have drawn lines in the sand and this project will present arguments from all 
                                        sides in order that the film can live up to it's name and <i>Let the People Decide</i>.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} md={6} lg={4} className="s-margin-t-b">
                                    <a href={`https://www.imdb.com/title/tt7242544/`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-film"/>&nbsp; View IMDb </button>
                                    </a>
                                </Col>
                                <Col sm={12} md={6} lg={8} className="s-margin-t-b">
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
        )
    }
}
