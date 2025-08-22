import './styles/global.css';
import './styles/home.css';

const Hero = ({ className }) => {
  return (
    <section id="homeSection" className={`${className}`}>
        <img src='/landing/home_section.jpeg' alt="Guy cleaning car" className="h-100 object-cover"/>
        <div className="tint"></div>
        <div id="homeHero" className="absolute center-y">
          <div className="container">
            <h1 className="title-md">Be Greater. beclean.</h1>
            <p className="text">Unveil the Beauty of Your Vehicle With Our Ceramic Coating Services.</p>
            <div id="heroButtons" className="flex">
              <a href="/services" className="button">Learn More</a>
              <a href="/book" className="button">Book Now</a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero