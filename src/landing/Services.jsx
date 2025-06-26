import './styles/services.css';
import content from '../content.json';

const Services = ({ className }) => {

    const { bookCTA, ceramicCoating, freeDelivery, glassCoating } = content.home.servicesSection;

  return (
    <section id="servicesSection" className={`${className}`}>
        <div className='container'>
            <div className="service-each">
            <div className="service-details">
                <h2 className="title-md">{ceramicCoating.title}</h2>
                <p className="text service-desc">
                    {ceramicCoating.description}
                </p>
                <div className="flex w-100">
                    <a href="/book" className="button">{bookCTA}</a>
                </div>
            </div>
            <div className="service-img">
                <img src='/landing/exterior_detail.jpeg' alt="Car exaust"/>
            </div>
            </div>
            <div className="service-each service-each-reverse row-reverse">
            <div className="service-details">
                <h2 className="title-md text-right">{glassCoating.title}</h2>
                <p className="text service-desc text-right">
                    {glassCoating.description}
                </p>
                <div className="flex justify-end">
                    <a href="/book" className="button">{bookCTA}</a>
                </div>
            </div>
            <div className="service-img service-img-reverse">
                <img src='/landing/interior_detail.jpg' alt="Cleaning interior car"/>
            </div>
            </div>
            <div className="service-each">
            <div className="service-details">
                <h2 className="title-md">{freeDelivery.title}</h2>
                <p className="text service-desc">
                    {freeDelivery.description}
                </p>
                <div className="flex">
                    <a href="/book" className="button">{bookCTA}</a>
                </div>
            </div>
            <div className="service-img">
                <img src='/landing/detail_package.jpg' alt="Car roof cleaning supplies"/>
            </div>
            </div>
        </div>
      </section>
  )
}

export default Services