import './styles/global.css';
import './styles/home.css';
import content from '../content.json';

const Hero = ({ className }) => {

  const { bookCTA, headline, learnMoreCTA, subtext, imgFilePath } = content.home.splash;

  return (
    <section id="homeSection" className={`${className}`}>
        <img src={imgFilePath} alt="Guy cleaning car" className="h-100 object-cover"/>
        <div className="tint"></div>
        <div id="homeHero" className="absolute center-y">
          <div className="container">
            <h1 className="title-md">{headline}</h1>
            <p className="text">{subtext}</p>
            <div id="heroButtons" className="flex">
              <a href="#servicesSection" className="button">{learnMoreCTA}</a>
              <a href="/book" className="button">{bookCTA}</a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero