import bm from "../Home/images/bm.jpg";
import merc from "../Home/images/merc.jpg";
import audi from "../Home/images/audi.jpg";
import bmlogo from "../Home/images/bmlogo.jpg";
import audilogo from "../Home/images/audilogo.jpg";
import merclogo from "../Home/images/merclogo.jpeg";
import Card from "./FeaturedCars/Card";

import "./Home.css";

import Testimonial from "./Testimonial";
import HeroSlider from "./Sliderhome";
import Landingpage from "./video";

function Home() {
  return (
    <div>
      <div>
        <HeroSlider />
      </div>
      <div className="home-allofabout">
        <div className="home-imagecollectionwithtitles">
          <div className="home-collectionwithtitles">
            <h1>MultiBrands Dealer</h1>
            <i>Best Solution For Your Needs</i>
          </div>
          <div className="home-imagecollection">
            <div className="container">
              <img className="home-audi" src={audilogo} alt="BMW"></img>
              <div className="overlay">
                <img className="home-BMW" src={audi} alt="BMW"></img>
              </div>
            </div>
            <div className="container">
              <img className="home-BMW" src={merclogo} alt="BMW"></img>
              <div className="overlay">
                <img className="home-BMW" src={merc} alt="BMW"></img>
              </div>
            </div>

            <div className="container">
              <img className="home-BMW" src={bmlogo} alt="BMW"></img>

              <div className="overlay">
                <img className="home-BMW" src={bm} alt="BMW"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Home">
        <h1>Home</h1>
        <div className="HomeFeaturedCars">
          <h2>Featured Cars:</h2>
          <Card />
        </div>
      </div>
      <div>
        <Landingpage />
      </div>
      {/* <div className="featuredcars">
        <h1>Featured Cars</h1>
      </div> */}
      <div className="testimonials">
        <h1 className="testimonial-title">Testimonials</h1>
        <div className="testi">
          <Testimonial />
        </div>
      </div>
    </div>
  );
}

export default Home;
