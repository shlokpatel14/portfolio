import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_if8j52c",
      "template_l6df5fj",
      form.current,
      "s5hupvno8IUi5KJEl"
    )
    .then(() => {
      alert("Message sent successfully ✅");
      form.current.reset();
    })
    .catch(() => {
      alert("Failed to send message ❌");
    });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="card">

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">Send Message</button>

      </form>
    </section>
  );
}