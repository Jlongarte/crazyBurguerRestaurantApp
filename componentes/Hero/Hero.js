import "./Hero.css";

const template = () => {
  return `
  <h1 id="home">Check Out Our New Menu! </h1>
  <button class="btn btn-main">Explore Menu</button>
  `;
};

const Hero = () => {
  const Hero = document.querySelector(".hero");
  Hero.innerHTML = template();
};
export default Hero;
