import "./Contacto.css";

const template = () => {
  return `
    <form id="contact" class="contact-form">
      <h2>Contact Us</h2>
      <input type="text" id="name" name="name" placeholder="Your Name" required>
      <input type="email" id="email" name="email" placeholder="Your Email" required>
      <input type="tel" id="phone" name="phone" placeholder="Your Phone">
      <textarea id="message" name="message" placeholder="Write your message..." required></textarea>
      <button type="submit" class="btn btn-main">Send</button>
    </form>
  `;
};

const Contacto = () => {
  const contacto = document.querySelector(".contacto");
  contacto.innerHTML = template();
};

export default Contacto;
