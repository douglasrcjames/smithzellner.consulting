import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Formik, Field } from 'formik';

import { subscribeFormSchema } from '../../utils/formSchemas'
import { firestore } from "../../Fire.js";

export default class SubscribeForm extends Component {
    constructor(props) {
        super(props);
        this.addSubscriber = this.addSubscriber.bind(this);
    }
    

    addSubscriber(values){
        firestore.collection('subscribers').add({
            email: values.email,
            subscribed: true,
            timestamp: Date.now(),
        }).then(
            alert("You've been subscribed submitted successfully.")
        );
      }
      
    render() {
        const initialFormState = {
            email: ""
          };

        return (
            <div className="horiz-center">
                <Formik
                    initialValues={initialFormState}
                    onSubmit={(values, actions) => {
                        this.addSubscriber(values);
                        actions.resetForm()
                    }}
                    validationSchema={subscribeFormSchema}
                    >
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <Grid fluid>
                                {/* Row 1 */}
                                <Row>
                                    <Col sm={12} md={6} className="s-margin-b">
                                        <label>Email:</label>
                                        <br/>
                                        <Field
                                            type="text"
                                            required
                                            onChange={props.handleChange}
                                            placeholder="john_doe@gmail.com"
                                            name="email"
                                            value={props.values.email}
                                        />
                                        <br/>
                                        {props.errors.email && props.touched.email ? (
                                            <span className="red">{props.errors.email}</span>
                                        ) : (
                                            ""
                                        )}
                                    </Col>
                                </Row>
                                <Row className="m-margin-b">
                                    <Col xs={12}>
                                        <button 
                                            type="submit" 
                                            disabled={!props.dirty && !props.isSubmitting}>
                                                Submit
                                        </button>
                                    </Col>
                                </Row>
                            </Grid>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}
