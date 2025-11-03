import "./Blog.css";

const template = () => {
  return `
  <h2>READ OUR BLOG</h2>

  <div class="blog-container">
    <!-- Card 1 -->
    <div class="blog-card">
      <div class="blog-image">
        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
          alt="Pizza"
        />
      </div>
      <div class="blog-content">
        <div class="blog-meta">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Author"
            class="author-img"
          />
         <p>By -Kiss Chef  / 3 Comment</p>
        </div>
        <h3>The Delicious Special Yummy Pizzas</h3>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti.
        </p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="blog-card">
      <div class="blog-image">
        <img
          src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=60"
          alt="Vegetables"
        />
      </div>
      <div class="blog-content">
        <div class="blog-meta">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Author"
            class="author-img"
          />
          <p>By -Kiss Chef  / 1 Comment</p>
        </div>
        <h3>Vegetable is good for your health</h3>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti.
        </p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="blog-card">
      <div class="blog-image">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
          alt="Chefs"
        />
      </div>
      <div class="blog-content">
        <div class="blog-meta">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Author"
            class="author-img"
          />
          <p>By -Kiss Chef  / 0 Comment</p>
        </div>
        <h3>Best Food Providers In Your Town</h3>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti.
        </p>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>
  </div>
    `;
};

const Blog = () => {
  const blog = document.querySelector(".blog-section");
  blog.innerHTML = template();
};

export default Blog;
