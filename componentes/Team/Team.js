import "./Team.css";

const template = () => {
  return `
     <h2>Our Team</h2>
    <div class="members">
      <div class="member member-one">
        <div class="overlay">
          <h3>María López</h3>
          <p>Sous Chef</p>
          <div class="socials">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            
          </div>
        </div>
      </div>

      <div class="member member-two">
        <div class="overlay">
          <h3>Carlos Pérez</h3>
          <p>Head Chef</p>
          <div class="socials">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>

          </div>
        </div>
      </div>

      <div class="member member-three">
        <div class="overlay">
          <h3>Ana Gómez</h3>
          <p>Pastry Chef</p>
          <div class="socials">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            
          </div>
        </div>
      </div>

      <div class="member member-four">
        <div class="overlay">
          <h3>Diego Torres</h3>
          <p>Grill Master</p>
          <div class="socials">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
       
          </div>
        </div>
      </div>
    </div>
    `;
};

const Team = () => {
  const team = document.querySelector(".team");
  team.innerHTML = template();
};

export default Team;
