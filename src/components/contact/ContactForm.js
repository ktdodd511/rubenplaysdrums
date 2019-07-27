import React, { Component } from 'react';


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
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
    const { name, email, message } = this.state;
    return (
      <div>
        <div className="text-center">
          <h2 className="text-center">Contact</h2>
        </div>

        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Email address</label>
              <input type="email" name="email" className="form-control" id="contact-email" value={email} placeholder="name@example.com" onChange={this.handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input name="name" type="text" className="form-control" id="contact-text" value={name} onChange={this.handleChange} required/>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Message</label>
              <textarea name="message" type="text" className="form-control" id="contact-text" rows="3" value={message} onChange={this.handleChange} required></textarea>
            </div>
            <button type="submit" id="contact-submit" className="btn btn-primary mb-2">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm
