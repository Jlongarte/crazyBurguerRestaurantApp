import "./style.css";
import Header from "../componentes/Header/Header";
import Hero from "../componentes/Hero/Hero";
import Menu from "../componentes/Menu/Menu";
import AboutUs from "../componentes/AboutUs/AboutUs";
import Banner from "../componentes/Banner/Banner";
import Team from "../componentes/Team/Team";
import Blog from "../componentes/Blog/Blog";
import Contacto from "../componentes/Contacto/Contacto";
import Footer from "../componentes/Footer/Footer";

const init = () => {
  Header();
  Hero();
  Menu();
  AboutUs();
  Banner();
  Team();
  Blog();
  Contacto();
  Footer();
};

init();
