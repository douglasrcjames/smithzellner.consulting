import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import ContactForm from '../misc/ContactForm';
import { Timeline } from 'rsuite';
import { Helmet } from 'react-helmet';

export default class About extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>About | Smith-Zellner Consulting</title>
                </Helmet>
                <div className="wrapper">
                    <Grid fluid>
                        <Row>
                            <Col sm={12} md={8} lg={10}>
                                <h1>About Smith-Zellner Consulting</h1>
                                <p>As dedicated human rights activists, we focus our work on social justice causes and offer our consulting skills to:</p>                              
                                <ul>
                                    <li>lead civil rights history tours throughout the South;</li>
                                    <li>train youth leaders in non-violent direct action;</li>
                                    <li>
                                        teach organizations how to listen well, respect differences of race,
                                        gender, religion and ideology, and work together effectively with
                                        people of opposing viewpoints;
                                    </li>
                                    <li>
                                        instruct companies on the beneficial business application of
                                        equality and diversity;
                                    </li>
                                    <li>
                                        and share our firsthand accounts of international civil rights
                                        campaigns and their memorable key leaders.
                                    </li>
                                </ul>

                                <br/>
                                <h2>The Founders</h2>
                                <p>
                                    Our goal is to help raise our collective human consciousness by facilitating the healing of our racial and genocidal history.
                                    Through the lens of our shared history, we aim to demonstrate how to respect differences of race, gender, religion and ideology. 
                                    Through listening to our neighbors and fellow citizens, we search for the common threads that bind us into this vibrant weave of many colors.
                                </p>
                                <p>
                                    Bob remains an active leader in the Civil Rights Movement, from the 1960s to today. The son and grandson of Ku Klux Klan members, 
                                    he risked his life – and nearly lost it – many times in the fight to achieve The Second Emancipation. As an organizer of The Freedom Rides of 1961 
                                    and the first white southerner to serve as field secretary for the Student Nonviolent Coordinating Committee (SNCC), he worked alongside Ella Baker, Martin Luther King, Jr., 
                                    John Lewis, Rosa Parks, Diane Nash, Julian Bond, Fannie Lou Hamer and many other civil rights leaders. Famous for battles with the KKK, segregationist lynch mobs, and violent police, 
                                    he is now one of the key individuals that a new generation turns to with questions on the racial, historical and cultural assumptions on which they were raised, 
                                    as they ask themselves, "What is my place in this struggle?"
                                </p>
                            </Col>
                            
                            <Col sm={12} md={4} lg={2}>
                                <Row start="xs" center="xs" className="s-margin-l">
                                    <Col>
                                        <img src={require("../../assets/images/misc/SS1_6241.jpg")} alt="pamela smith" className="medium responsive m-padding-t-b" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    
                   
                    <br/>
                    <hr/>
                    <br/>
                    
                        <Row>
                            <Col sm={12} md={4} lg={2}>
                                <img src={require("../../assets/images/misc/BobZellner3-sq.jpg")} alt="bob zellner" className="medium rounded responsive" />
                            </Col>
                            
                            <Col sm={12} md={8} lg={10} >
                                <Row start="xs" className="s-margin-l">
                                    <Col>
                                        <h2>Bob Zellner</h2>
                                        <p>
                                            In his talks, training and writing, Bob Zellner brings to life the victories, struggles and heartbreaks of the civil rights era in a way that empowers and instructs audiences and 
                                            today's movement. Bob presents a modern-day message for combatting deep-seated racism and discrimination to help spark positive widespread social change.
                                        </p>
                                        <br/>
                                        <Timeline align={"left"} className="s-margin-t">
                                            <Timeline.Item>
                                                <b className="display-block">2020</b>
                                                <p>SAA (Shirts Across America) Youth leadership organization, organizational consultant, <a href="http://www.shirtsacrossamerica.org" target="_blank" rel="noopener noreferrer">www.shirtsacrossamerica.org</a></p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <p>Common Power, <a href="https://www.commonpower.org" target="_blank" rel="noopener noreferrer">www.commonpower.org</a></p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <p>Project Pilgrimage, Traveling Historian on Biannual civil rights tours since 2007, <a href="https://www.projectpilgrimage.org" target="_blank" rel="noopener noreferrer">www.projectpilgrimage.org</a></p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <p>Faith &amp; Politics Congressional Tours, Featured Speaker since 2005, <a href="https://www.faithandpolitics.org" target="_blank" rel="noopener noreferrer">www.faithandpolitics.org</a></p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2019</b>
                                                <p>Consultant for <i>Son of the South</i>, film based on Bob's autobiography, <i>The Wrong Side of Murder Creek</i></p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <p>Honorary Doctor of Humane Letters, University of Indianapolis</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2018-Present</b>
                                                <p>Co-Founder &amp; Managing Partner, Smith-Zellner Consulting, Fairhope, Alabama</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2016</b>
                                                <p>Volunteer Doug Jones Campaign, Alabama</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2014-2015</b>
                                                <p>March 273 miles from Belhaven, North Carolina to Washington DC to save rural hospitals - with over 100 community members, including Republican Mayor Adam O’Neal &amp; Rev. William Barber</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2010-2015</b>
                                                <p>Moral Mondays Movement with Rev. William Barber, NC</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2013</b>
                                                <p>One Dream Multimedia Project, a Time Magazine issue commemorating 50th anniversary of 1963 March on Washington, features Bob among other key civil rights activists.</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2012</b>
                                                <p>Living Legends Awards for Service to Humanity, Emmanuel Seventh-day Adventist Church, Ashton, Maryland</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2009</b>
                                                <p>Lillian Smith Book award for <i>The Wrong Side of Murder Creek</i> - <a href="https://www.youtube.com/watch?v=kTnl5DCDEqM" target="_blank" rel="noopener noreferrer">Video of Bob receiving award</a></p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2003</b>
                                                <p>Shinnecock Nation campaign activist to stop bulldozing of ancestral burial grounds, Southampton, New York</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2002</b>
                                                <p>Honorary Doctor of Laws, St. Joseph College, New York</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2001</b>
                                                <p>Candidate, Democratic New York State Senator</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">1980</b>
                                                <p>GROW (Grass Roots Organizing Work) project organizer in Mississippi, Alabama, Louisiana, and Georgia since 1968. Gulf Coast Pulp Wood Association, Woodcutters Union Campaign.</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">1967</b>
                                                <p>SNCC field secretary since 1961, with Ella Baker, Rev. Dr. Martin Luther King, Jr., Rosa Parks, Julian Bond, John Lewis, Fannie Lou Hamer, Kwame Ture (Stokely Carmichael), James Forman, Bayard Rustin, Harry Belafonte, Bob Dylan, Pete Seeger</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">1961</b>
                                                <p>Counselor in Mississippi preparing students to enter integrated classrooms in the fall</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <p>Trainee, Non-Violence Workshops led by Jim Lawson, John Lewis, Diane Nash in Nashville, Tennessee</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <p>BA, Sociology/Psychology, Huntingdon College, Montgomery, Alabama</p>
                                            </Timeline.Item>
                                        </Timeline>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br/>
                        <hr/>
                        <br/>
                        <Row>
                            <Col sm={12} md={4} lg={2}>
                                <img src={require("../../assets/images/misc/SS1_6252.jpg")} alt="pamela smith" className="medium rounded responsive m-padding-t-b" />
                            </Col>
                            
                            <Col sm={12} md={8} lg={10} >
                                <Row start="xs" className="s-margin-l">
                                    <Col>
                                        <h2>Pamela Smith</h2>
                                        <Timeline align={"left"} className="s-margin-t">
                                            <Timeline.Item>
                                                <b className="display-block">2018-Present</b>
                                                <p className="no-padding">Co-Founder &amp; Managing Partner, Smith-Zellner Consulting, Fairhope, Alabama</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <p>Traveling Historian on Project Pilgrimage civil rights tours</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2014-2018</b>
                                                <p>Nurse’s Aide, In-home Palliative Care, Boulder, Colorado</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <p>Nurse’s Aide, Dignity Care Boulder, Colorado, <a href="https://www.dignitycare.com" target="_blank" rel="noopener noreferrer">www.dignitycare.com</a></p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2013-2014</b>
                                                <p>Midwife Assistant, Manos Abiertas Clinic, full-spectrum Maya Women’s Healthcare, in Ciudad Vieja, Guatemala, <a href="https://www.asociasionmanosabiertas.org" target="_blank" rel="noopener noreferrer">www.asociasionmanosabiertas.org</a></p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2005-2010</b>
                                                <p>Staff Manager &amp; Medical Aide, Cerebral Palsy patient, private facility, Colorado</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2006</b>
                                                <p>Naropa University, Boulder studied Psychology &amp; Creative writing</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">1994-1998</b>
                                                <p>Board Member, Thistle Community Housing, Boulder, Colorado, <a href="https://www.thistle.us" target="_blank" rel="noopener noreferrer">www.thistle.us</a></p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">1990-1998</b>
                                                <p>Founder, Wee Care, Doula service, in-home maternity support for new babies &amp; mothers, Boulder, Colorado</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">1994</b>
                                                <p>University of Colorado, Boulder studied Spanish and Creative Writing</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">1972-1989</b>
                                                <p>Full-time Mother of five</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">1984</b>
                                                <p>Faulkner State College in Fairhope, Alabama, studied Anatomy and Sociology</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">1974-1977</b>
                                                <p>Founding Member, Plenty International, construction and health care relief for Maya communities. <a href="https://www.plenty.org" target="_blank" rel="noopener noreferrer">www.plenty.org</a></p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">1971-1978</b>
                                                <p>Founding member, The Farm, Summertown, Tennessee, <a href="https://www.thefarm.org" target="_blank" rel="noopener noreferrer">www.thefarm.org</a></p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">1967-1969</b>
                                                <p>University of Missouri studied Liberal Arts</p>
                                            </Timeline.Item>
                                        </Timeline>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="center-text">
                        <h4>PHOTO CREDITS: <u>Home Page</u> - Danny Lyon; <u>About Page</u> - Color Cameos: Stephen Savage; Bottom: Richard Avedon; <u>Contact page</u> – Richard Avedon</h4>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                </div>
                
                <div className="hero-container-1">
                    <div className="hero-image-3">
                        <div className="hero-text-2">
                            <h1><a id="Contact" className="anchor" href="/#">Contact</a>Contact</h1>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
