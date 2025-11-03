import "./Menu.css";
import burgers from "../../data/data";

const template = () => {
  const burgerCards = burgers
    .map(
      (burger) => `
      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <img src="${burger.photo}" alt="${burger.name}" />
            <div class="card-container">
              <h3>${burger.name}</h3>
              <h4>$${burger.price.toFixed(2)}</h4>
              <p>${burger.description}</p>
            </div>
          </div>
          <div class="card-back">
            <h4>Ingredients</h4>
            <p>${burger.ingredients.join(", ")}</p>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  return `
    <h2>Our Burgers</h2>
    <div id="menu" class="categories">
      <button class="btn btn-category" data-category="all">ALL</button>
      <button class="btn btn-category" data-category="veggie">VEGGIE</button>
      <button class="btn btn-category" data-category="fish">FISH</button>
      <button class="btn btn-category" data-category="glutenfree">GLUTEN FREE</button>
    </div>
    <div class="menu">
      <div class="cards">
        ${burgerCards}
      </div>
    </div>
  `;
};

const Menu = () => {
  const menu = document.querySelector(".menu");
  menu.innerHTML = template();

  const renderBurgers = (burgerList) => {
    const cards = burgerList
      .map(
        (burger) => `
        <div class="card">
          <div class="card-inner">
            <div class="card-front">
              <img src="${burger.photo}" alt="${burger.name}" />
              <div class="card-container">
                <h3>${burger.name}</h3>
                <h4>$${burger.price.toFixed(2)}</h4>
                
              </div>
              <p>${burger.description}</p>
            </div>
            <div class="card-back">
              <h4>Ingredients</h4>
              <p>${burger.ingredients.join(", ")}</p>
            </div>
          </div>
        </div>
      `
      )
      .join("");

    document.querySelector(".cards").innerHTML = cards;
  };

  // Eventos de los botones de categoría
  const buttons = document.querySelectorAll(".btn-category");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category.toLowerCase();
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      if (category === "all") {
        renderBurgers(burgers);
      } else {
        const filtered = burgers.filter(
          (burger) => burger.category.toLowerCase() === category
        );
        renderBurgers(filtered);
      }
    });
  });
};

export default Menu;
