import React, { useState,useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceID = 'service_6xrtjoa';
    const templateID = 'template_wk7o7ka';
    const publicKey = '4T4StcfYAUVjqdma4';


    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Thanks you for Connecting");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    
  };

  return (
    <div>
      <section id="contact">
        <p className="section__text__p1">|| जय श्री राम ||</p>
        <h1 className="title">Contact</h1>
        <p className="section__text__p1">Team PawanPutra</p>


        <div className="contact-container">
          <form ref={form} id="contactForm" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              id="message"
              name="message"
              placeholder="Write a Message for team pawan putra"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button className="btn btn-color-2" type="submit">
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
