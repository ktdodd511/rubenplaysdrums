import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Contact extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <h2 className="text-center">Contact</h2>
        </div>

        <div>
          <form name="contactForm" method="POST" data-netlify="true" id="contact-form">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email address*</label>
              <input type="email" name="Email" className="form-control" id="contact-email" placeholder="name@example.com" required/>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input name="Name" type="text" className="form-control" id="contact-text" required/>
            </div>
            <div className="form-group">
              <label htmlFor="Company">Company</label>
              <input name="Company" type="text" className="form-control" id="contact-text"/>
            </div>
            <div className="form-group">
              <label htmlFor="example-tel-input">Phone</label>
              <input className="form-control" name="Phone" type="tel" placeholder="(555)-555-5555" id="example-tel-input"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Message</label>
              <textarea name="Message" type="text" className="form-control" id="contact-text" rows="3"></textarea>
            </div>
            <button type="submit" id="contact-submit" className="btn btn-primary mb-2">Submit</button>
            <p>
              *required
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;
