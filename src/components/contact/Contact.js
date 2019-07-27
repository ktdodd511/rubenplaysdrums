import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ContactForm from './ContactForm';


class Contact extends Component {
  render() {
    return (
      <div>
        <ContactForm />
      </div>
    )
  }
}

export default Contact;
