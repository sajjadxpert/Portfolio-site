import { React, useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useState } from "react";
const Contact = () => {
  const [successMsg, setmsg] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_eplqc8d",
      "template_rmk182y",
      form.current,
      "TaTgmckfSu1hL7zJ6"
    );
    e.target.reset();
    setmsg(true);
    // .then(
    //   (result) => {
    //     console.log(result.text);
    //     document.getElementById("myForm").reset();
    //     setmsg(true);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>asadimran2877@gmail.com</h5>
            <a
              href="mailto:asadimran28772gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>asadimran</h5>
            <a
              href="mailto:asadimran2877gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+923074390509</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+923074390509"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* End of contact Options */}
        <form id="myForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {successMsg && <p>Message Sent Successfully</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
