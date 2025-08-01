import "./HomePage.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <header className="hero" id="home">
        <p className="tagline">“Where tradition meets trend”</p>
        <p className="description">
          Hair with a balance of classic techniques with modern styles.
        </p>
        <Link to="/booking" className="cta-button">
            Book Now
        </Link>
      </header>

      <section className="about">
        <h2>About Zoey</h2>
        <p>
          Zoey is a professional hairstylist with a passion for bringing out your natural beauty.
          Whether you're looking for a fresh cut, color, or a full transformation, you're in expert hands.
        </p>
      </section>

        <Footer />
    </div>
  );
};

export default HomePage;
