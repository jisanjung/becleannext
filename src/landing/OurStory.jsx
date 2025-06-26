import './styles/ourstory.css';
import content from '../content.json';

const OurStory = ({ className }) => {

  const { title, paragraph1, paragraph2 } = content.home.ourStorySection;

  return (
    <section id="ourStorySection" className={`${className}`}>
        <div className="container">
            <h2 className="title-sm text-center">{title}</h2>
            <p className="text text-center">
              {paragraph1}
            </p>
            <br/>
            <p className="text text-center">
              {paragraph2}
            </p>
        </div>
    </section>
  )
}

export default OurStory