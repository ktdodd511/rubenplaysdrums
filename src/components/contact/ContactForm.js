import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "", phone: "", company: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message, phone, company } = this.state;
    return (
      <div>
        <div className="text-center">
          <h2 className="text-center">Contact</h2>
        </div>

        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email address*</label>
              <input type="email" name="email" className="form-control" id="contact-email" placeholder="name@example.com" required/>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input name="name" type="text" className="form-control" id="contact-text" required/>
            </div>
            <div className="form-group">
              <label htmlFor="Company">Company</label>
              <input name="company" type="text" className="form-control" id="contact-text"/>
            </div>
            <div className="form-group">
              <label htmlFor="example-tel-input">Phone</label>
              <input className="form-control" name="phone" type="tel" placeholder="(555)-555-5555" id="example-tel-input"/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Message</label>
              <textarea name="message" type="text" className="form-control" id="contact-text" rows="3"></textarea>
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

export default ContactForm
