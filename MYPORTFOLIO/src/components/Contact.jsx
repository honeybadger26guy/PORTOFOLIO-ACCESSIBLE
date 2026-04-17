import { useRef } from 'react';
import emailjs from "@emailjs/browser"
import { motion } from 'framer-motion';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q24s1j8",
        "template_nu59xxq",
        form.current,
        "XISDXMM5lzbwzxDlT"
      )
      .then(() => {
        alert("Message sent successfully ✅");
      })
      .catch(() => {
        alert("Something went wrong ❌");
      });
  }

  return(
    <section className="contact" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact Me
      </motion.h2>

      {/* Direct Email */}
      <p>
        Email: <span>omowumijeremiah25@gmail.com</span>
      </p>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit"> Send Message</button>
      </form>
    </section>
  );
}

export default Contact;