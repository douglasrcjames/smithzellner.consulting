import React, { Component } from 'react'
import { Formik, Field } from 'formik';

import { withToast } from '../misc/AlertHOC'
import { subscribeFormSchema } from '../../utils/formSchemas'
import { firestore } from "../../Fire.js";

class SubscribeForm extends Component {
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
            this.props.addToast("You've been subscribed submitted successfully.", { appearance: 'success' })
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
                        <form onSubmit={props.handleSubmit} className="form">
                            <Field
                                type="text"
                                className="reduced"
                                required
                                onChange={props.handleChange}
                                placeholder="johndoe@email.com"
                                name="email"
                                value={props.values.email}
                            />
                            <button 
                                type="submit" 
                                className="s-margin-t-b"
                                disabled={!props.dirty && !props.isSubmitting}>
                                    Submit
                            </button>   
                            <br/>
                            {props.errors.email && props.touched.email ? (
                                <span className="red">{props.errors.email}</span>
                            ) : (
                                ""
                            )} 
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default withToast(SubscribeForm);
