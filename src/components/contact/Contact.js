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
          <form name="contact" method="POST" data-netlify="true" id="contact-form">
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address*</label>
              <input type="email" name="Email" class="form-control" id="contact-email" placeholder="name@example.com" required/>
            </div>
            <div class="form-group">
              <label for="name">Name*</label>
              <input name="Name" type="text" class="form-control" id="contact-text" required/>
            </div>
            <div class="form-group">
              <label for="Company">Company</label>
              <input name="Company" type="text" class="form-control" id="contact-text"/>
            </div>
            <div class="form-group">
              <label for="example-tel-input">Phone</label>
              <input class="form-control" name="Phone" type="tel" placeholder="(555)-555-5555" id="example-tel-input"/>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea name="Message" type="text" class="form-control" id="contact-text" rows="3"></textarea>
            </div>
            <button type="submit" id="contact-submit" class="btn btn-primary mb-2">Submit</button>
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
