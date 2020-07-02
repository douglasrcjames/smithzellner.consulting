import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Formik, Field } from 'formik';

import { withToast } from '../misc/AlertHOC'
import { contactFormSchema } from '../../utils/formSchemas'
import { firestore } from "../../Fire.js";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.addMessage = this.addMessage.bind(this);
    }
    

    addMessage(values){
        
        firestore.collection('messages').add({
            email: values.email,
            name: values.name,
            body: values.body,
            timestamp: Date.now(),
        }).then(
            this.props.addToast('Message submitted successfully.', { appearance: 'success' })
        );
      }
      
    render() {
        const initialFormState = {
            email: "",
            name: "",
            body: ""
          };

        return (
            <div className="horiz-center">
                <Formik
                    initialValues={initialFormState}
                    onSubmit={(values, actions) => {
                        this.addMessage(values);
                        actions.resetForm()
                    }}
                    validationSchema={contactFormSchema}
                    >
                    {props => (
                        <form onSubmit={props.handleSubmit} className="form">
                            <Grid fluid>
                                {/* Row 1 */}
                                <Row>
                                    <Col sm={12} md={6} className="s-margin-b">
                                        <label>Name:</label>
                                        <br/>
                                        <Field
                                            type="text"
                                            required
                                            onChange={props.handleChange}
                                            placeholder="John Doe"
                                            name="name"
                                            value={props.values.name}
                                        />
                                        <br/>
                                        {props.errors.name && props.touched.name ? (
                                            <span className="red">{props.errors.name}</span>
                                        ) : (
                                            ""
                                        )}
                                        
                                    </Col>
                                    <Col sm={12} md={6} className="s-margin-b">
                                        <label>Email:</label>
                                        <br/>
                                        <Field
                                            type="text"
                                            required
                                            onChange={props.handleChange}
                                            placeholder="johndoe@email.com"
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
                                <Row>
                                    <Col xs={12} className="s-margin-b">
                                        <label>Message:</label>
                                        <br/>
                                        <Field
                                            component="textarea"
                                            required
                                            onChange={props.handleChange}
                                            placeholder="Detail what you want to say here."
                                            name="body"
                                            value={props.values.body}
                                        />
                                        <br/>
                                        {props.errors.body && props.touched.body ? (
                                            <span className="red">{props.errors.body}</span>
                                        ) : (
                                            ""
                                        )}
                                    </Col>
                                </Row>
                                <Row center="xs" className="m-margin-b">
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

export default withToast(ContactForm);
