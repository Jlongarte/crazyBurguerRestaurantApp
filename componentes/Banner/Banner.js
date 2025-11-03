import "./Banner.css";

const template = () => {
  return `
 <div class="banner-left">
      <div class="content">
        <h4>FOODS YOU LOVE TO TASTE</h4>
        <h1>Welcome To Fast Food</h1>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it is an almost 
          unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum 
          decided to leave for the far World of Grammar.
        </p>
        <button class="btn">Watch Video</button>
      </div>
    </div>

    <div class="banner-right">
      <div class="overlay"></div>
      <div class="play-btn">
        <!-- 🎥 Ícono SVG del “play” -->
        <svg width="70" height="70" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </div>
    </div>
    `;
};

const Banner = () => {
  const banner = document.querySelector(".banner");
  banner.innerHTML = template();
};

export default Banner;
