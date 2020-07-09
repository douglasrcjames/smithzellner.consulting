import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import ContactForm from '../misc/ContactForm';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <h1>About Smith-Zellner Consulting</h1>
                    <p>
                        Our goal is to raise our collective consciousness by facilitating the healing of our racial and genocidal national history. 
                        Through the lens of our collective history, we aim to demonstrate how to respect differences of race, gender, religion and ideology. 
                        Listening to our neighbors and fellow citizens, searching for the common threads that bind us into this vibrant weave of many colors.
                    </p>
                    
                    <br/>
                    <hr/>
                    <br/>
                    <Grid fluid>
                        <Row>
                            <Col sm={12} md={4} lg={2}>
                                <img src={require("../../assets/images/BobZellner3-sq.jpg")} alt="bob zellner" className="medium rounded responsive" />
                            </Col>
                            
                            <Col sm={12} md={8} lg={10} >
                                <Row start="xs" className="s-margin-l">
                                    <Col>
                                        <h2>Bob Zellner</h2>
                                        <p>
                                            Bob Zellner brings to life the victories, struggles and heartbreaks of the Civil Rights era in a way that empowers and instructs audiences and the modern-day movement. 
                                        </p>
                                        <p>
                                            Bob is one of the most influential leaders in the Civil Rights Movement, from the 1960s to today. The son and grandson of Ku Klux Klan members, 
                                            he risked his life – and nearly lost it – many times in the fight to achieve The Second Emancipation. As an organizer of The Freedom Rides of 1961 
                                            and the first white southerner to serve as field secretary for the Student Nonviolent Coordinating Committee, he worked alongside Martin Luther King, Jr., 
                                            John Lewis, Rosa Parks and many other civil rights leaders. Famous for battles with the KKK, segregationist lynch mobs, and violent police, 
                                            he is now the individual that a new generation turns to with questions on the racial, historical and cultural assumptions on which they were raised, 
                                            as they ask themselves, "What is my place in this struggle?"
                                        </p>
                                        <p>
                                            Bob presents a modern-day message for combating deep-seated racism, discrimination and prejudice and sparking widespread social change.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br/>
                        <hr/>
                        <br/>
                        <Row>
                            <Col sm={12} md={4} lg={2}>
                                <img src={require("../../assets/images/Pam.jpg")} alt="pamela smith" className="medium rounded responsive m-padding-t-b" />
                            </Col>
                            
                            <Col sm={12} md={8} lg={10} >
                                <Row start="xs" className="s-margin-l">
                                    <Col>
                                        <h2>Pamela Smith</h2>
                                        <p>
                                            E. Pamela Smith-Zellner is Mother to five and Grandmother to three exceptional Human beings. She considers Motherhood her most important work.
                                        </p>

                                        <p>
                                            Pamela is driven by the desire to elevate her human consciousness, in order to have the capacity to create health and wellbeing for others.
                                        </p>

                                        <p>
                                            After College at the University of Missouri, Pamela became a founding member of “The Farm” an intentional, Spiritual, Vegetarian community in Summertown Tennessee. 
                                            “The Farm’s founding members were predominately, white, educated and professional young women and men, who rejected the norms, dogma and racism of their materialistic culture. 
                                            Their vision was to create a healthy community in tune with Natures processes and raise human consciousness.
                                        </p>

                                        <p>
                                            In keeping with The Farm’s vision, Plenty, a national and international relief organization, was created. In 1976 Plenty partnered with Canada to assist with 
                                            medical relief and construction following the 1976 7.5 earthquake in Guatemala that took 23,000 lives. Pamela, her husband and three young sons lived in a 
                                            tent in the Guatemala highland village of Itzapa. Pamela and The Farm’s medical team provided health and nutrition support for Mayan’s suffering malnutrition 
                                            and poverty as a result of the earthquake and a genocidal dictatorship.
                                        </p>

                                        <p>
                                            Pamela has worked in the medical field for twenty years, as a Nurse’s assistant in the areas of birth and death. An advocate for natural childbirth she 
                                            established Wee Care in Boulder Colorado during the 90’s, one of the first Doula services, a business designed to support Mothers through labor and provide 
                                            postpartum, in-home care for Mothers and their families.
                                        </p>

                                        <p>
                                            Thanks to Peter Yarrow of Peter, Paul and Mary fame, and Byron Buck, Pamela met Bob at the Black Hills Unity concert in Solidarity with Standing Rock in 2016. Their
                                            mutual passion for justice for their Native American sisters and Brothers was the tie that bound them. Their shared desire to elevate our nations consciousness and 
                                            ensure equal rights for all people compelled them to create Smith-Zellner consulting.
                                        </p>

                                        <p>
                                            Their civil rights work includes, traveling with Project Pilgrimage a civil rights tour from Seattle. Founded by David Domke the head of the 
                                            Communication Dept at University of Washington. Citizens and students from the Seattle area travel through the deep south to significant places 
                                            that transformed America during the Civil rights Movement of the 1950’s and 60’s. Such as, Money Mississippi were Emmett Till was murdered, eji, 
                                            Equal Justice Initiative, in Montgomery, the Edmund Pettus bridge, the Home of Medgar Evers and Philadelphia Mississippi where the three young Civil 
                                            Rights organizers were lynched in 1964.
                                        </p>

                                        <p>
                                        For over 15 years Bob has traveled with John Lewis to Selma to reenact the Bloody Sunday March over the Edmund Pettus bridge, with the Faith and 
                                        Politics Institute of the United States Congress. For the past four years Pamela and Bob have been a team on the Congressional Pilgrimage
                                        </p>

                                        <p>
                                        Bob and Pamela lecture throughout the year at Universities, Colleges and business’s interested in Civil Rights history and organizing for change.
                                        </p>

                                        <p>
                                            Shirts Across America, SAA is a youth leadership organization from Seattle. This exemplary group has been sending teams of young people to 
                                            New Orleans since 2007 to help in the reconstruction of the 9th ward following hurricane Katrina. They have financed 16 homes and helped in the 
                                            rebuilding of 200. Pamela and Bob work with their leadership weekly, striving to give youth the tools they need to effectively and safely help 
                                            create change in our current volatile political climate.
                                        </p>

                                        <p>
                                            They are currently working to reelect Congressman, Doug Jones as US senator from Alabama.
                                        </p>

                                        <p>
                                            Pamela’s consulting is informed by extensive world travel.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                
                <div className="hero-container-large">
                    <div className="hero-image-3">
                        <div className="hero-text">
                            <h1><a id="Contact" className="anchor" href="/#">Contact</a>Contact</h1>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
