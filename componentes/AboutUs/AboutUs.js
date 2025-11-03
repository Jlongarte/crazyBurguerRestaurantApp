import "./AboutUs.css";

const template = () => {
  return `
  <div id="about" class="us">
    <div class="text-us">
      <h2>about us</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut laboriosam perspiciatis vitae inventore natus
        fugiat officiis nam. Sit voluptatem quo recusandae ab eligendi beatae quam nemo iusto est quis dolorum fugiat,
        quos, fugit deserunt, nostrum facere quia debitis architecto optio aspernatur ipsam sint. Ea, mollitia.</p>
        <button class="btn">Read More</button>
    </div>
    
 
  <div class="image-us"></div>
   </div>
    `;
};

const aboutUs = () => {
  const about = document.querySelector(".about-us");
  about.innerHTML = template();
};

export default aboutUs;
