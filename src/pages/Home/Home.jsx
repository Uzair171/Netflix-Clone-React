import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/Play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCards/TitleCard.jsx'

const Home=() => {
    return(
        <div className="home">
            <Navbar/>
            <div className="hero">
                <img src={hero_banner} alt="hero-banner" className='banner-img' />
                <div className="hero_caption">
                    <img src={hero_title} alt="hero-title" className='caption_img'/>
                    <p>Discovering his ties to a secret ancient order, a young man living
                        in modren istanbul embarks on a quest to save a city from immortal
                        enemy 
                    </p>
                    <div className="hero-btn">
                        <button className='btn'><img src={play_icon} alt="Play Icon" />Play</button>
                        <button className='btn dark-btn'><img src={info_icon} alt="Info Icon" />More Info</button>
                    </div>
                </div>
            </div>
            <TitleCard/>
        </div>
    )
}

export default Home