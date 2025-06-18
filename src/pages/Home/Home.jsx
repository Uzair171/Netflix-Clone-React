import './Home.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCard from '../../components/TitleCards/TitleCard.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const hero_banner = "/hero_banner.jpg";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="hero">
        <img src={hero_banner} alt="hero-banner" className="banner-img" />

        <div className="hero_caption">
          <img src={hero_title} alt="hero-title" className="caption_img" />

          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save a city from an immortal
            enemy.
          </p>

          <div className="hero-btn">
            <button className="btn">
              <img src={play_icon} alt="Play Icon" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="Info Icon" />
              More Info
            </button>
          </div>

          <div className="hero-card">
            <TitleCard />
          </div>
        </div>
      </div>

      <div className="more-cards">
        <TitleCard title="Blockbuster Movies" category="now_playing" />
        <TitleCard title="Top on Netflix" category="popular" />
        <TitleCard title="Top Pick For You" category="top_rated" />
        <TitleCard title="Upcoming Movies" category="upcoming" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
