import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../navabar/Navbar';
import upi from '../../assets/upii.jpeg';
import classes from "./Donation.module.css";
import Footer from '../Footer/Footer'
const Donation = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Amount: '',
    Transaction_id: '',
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
          alert("Thanks you for you Donation");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );


  };

  return (
    <div>
      <Navbar />

      <section id="contact">
        <div className={classes.shriram}>
          <p className="section__text__p1">|| जय श्री राम ||</p>
          <h1 className="title">Donation</h1>
          <p className="section__text__p1">Team PawanPutra</p>
        </div>


        <div className={classes.contactContainer}>
          <img className={classes.upiimg} src={upi} />
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
              id="Amount"
              name="Amount"
              placeholder="Enter the Amount"
              value={formData.Amount}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="Transaction_id"
              name="Transaction_id"
              placeholder="Transaction_id"
              value={formData.Transaction_id}
              onChange={handleChange}
              pattern="[0-9]{12}"
              title="Please enter exactly 12 digits"
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

export default Donation
