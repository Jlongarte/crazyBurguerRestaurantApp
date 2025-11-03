import "./Header.css";

const template = () => {
  return `
 <nav>
  <img src="/logo.png" alt="logo">
  
  <div class="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#menu">Menu</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact Us</a></li>
  </ul>
</nav>
    `;
};

const Header = () => {
  const header = document.querySelector("header");
  header.innerHTML = template();

  // -----------------------------
  // Menú hamburguesa
  // -----------------------------
  const hamburger = header.querySelector(".hamburger");
  const navMenu = header.querySelector("nav ul");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
  });

  // -----------------------------
  // Smooth scroll
  // -----------------------------
  const links = header.querySelectorAll("nav ul li a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // evitar el salto instantáneo
      const targetId = link.getAttribute("href").substring(1); // quita el #
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }

      // cerrar menú hamburguesa al hacer click
      navMenu.classList.remove("active");
      hamburger.classList.remove("open");
    });
  });
};

export default Header;
