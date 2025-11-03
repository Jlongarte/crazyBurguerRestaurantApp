import "./Footer.css";

const template = () => {
  return `
  <footer class="footer">
    <div class="container">

      <!-- ABOUT US -->
      <div class="footer-section about">
        <h3>ABOUT US</h3>
        <div class="underline"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel neque, odio illum. Est minima sint minus sunt ducimus.</p>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-google-plus-g"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      <!-- RECENT POSTS -->
      <div class="footer-section recent-posts">
        <h3>RECENT POSTS</h3>
        <div class="underline"></div>
        <div class="post">
          <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" alt="Pizza">
          <div>
            <p class="post-title">The Delicious Special Yummy Pizzas</p>
            <span class="date">Jun 24,2021</span>
          </div>
        </div>
        <div class="post">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500" alt="Vegetables">
          <div>
            <p class="post-title">Vegetable is good for your health</p>
            <span class="date">Jun 24,2021</span>
          </div>
        </div>
      </div>

      <!-- INSTAGRAM POSTS -->
      <div class="footer-section instagram">
        <h3>INSTAGRAM POSTS</h3>
        <div class="underline"></div>
        <div class="insta-grid">
          <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?_gl=1*1g0frja*_ga*OTg0NjQ3ODk4LjE3NjE4MzE1NjU.*_ga_8JE65Q40S6*czE3NjE4MzE1NjQkbzEkZzEkdDE3NjE4MzE1NzAkajU0JGwwJGgw" alt="">
          <img src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?_gl=1*1g0frja*_ga*OTg0NjQ3ODk4LjE3NjE4MzE1NjU.*_ga_8JE65Q40S6*czE3NjE4MzE1NjQkbzEkZzEkdDE3NjE4MzE1NzAkajU0JGwwJGgw" alt="">
          <img src="https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?_gl=1*19gwq6x*_ga*OTg0NjQ3ODk4LjE3NjE4MzE1NjU.*_ga_8JE65Q40S6*czE3NjE4MzE1NjQkbzEkZzEkdDE3NjE4MzE1NzAkajU0JGwwJGgw" alt="">
          <img src="https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?_gl=1*19gwq6x*_ga*OTg0NjQ3ODk4LjE3NjE4MzE1NjU.*_ga_8JE65Q40S6*czE3NjE4MzE1NjQkbzEkZzEkdDE3NjE4MzE1NzAkajU0JGwwJGgw" alt="">
          <img src="https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?_gl=1*1g0frja*_ga*OTg0NjQ3ODk4LjE3NjE4MzE1NjU.*_ga_8JE65Q40S6*czE3NjE4MzE1NjQkbzEkZzEkdDE3NjE4MzE1NzAkajU0JGwwJGgw" alt="">
          <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?_gl=1*1g0frja*_ga*OTg0NjQ3ODk4LjE3NjE4MzE1NjU.*_ga_8JE65Q40S6*czE3NjE4MzE1NjQkbzEkZzEkdDE3NjE4MzE1NzAkajU0JGwwJGgw" alt="">
        </div>
      </div>

      <!-- CONTACT -->
      <div class="footer-section contact">
        <h3>HAVE A QUESTIONS?</h3>
        <div class="underline"></div>
        <div class="contact-item">
          <div class="icon-box"><i class="fa fa-location-dot"></i></div>
          <p>203 Fake St. Mountain View, San Francisco, California</p>
        </div>
        <div class="contact-item">
          <div class="icon-box"><i class="fa fa-phone"></i></div>
          <p>+2 391 3924 222</p>
        </div>
        <div class="contact-item">
          <div class="icon-box"><i class="fa fa-envelope"></i></div>
          <p>support@crazyburguers.com</p>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <p>Copyright ©2025 Garayoa. All rights reserved</p>
    </div>
  </footer>
    `;
};

const Footer = () => {
  const footer = document.querySelector(".footer");
  footer.innerHTML = template();
};

export default Footer;
