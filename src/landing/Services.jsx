import './styles/services.css';

const Services = ({ className }) => {
  return (
    <section id="servicesSection" className={`${className}`}>
        <div className='container'>
            <div className="service-each">
            <div className="service-details">
                <h2 className="title-md">Ceramic Coating</h2>
                <p className="text service-desc">
                    Our ceramic coating services are designed to protect your vehicle while enhancing its appearance with a deep, 
                    lasting gloss. We specialize in a meticulous, multi-stage process using a 2-layer ceramic coating system to 
                    ensure long-term durability, hydrophobic performance, and a mirror-like finish. Each coating is applied in 
                    a controlled studio environment and includes complimentary delivery and a signature aftercare kit, 
                    so your vehicle stays protected long after it leaves our hands.
                </p>
                <div className="flex w-100">
                    <a href="/book" className="button">Book Now</a>
                </div>
            </div>
            <div className="service-img">
                <img src='/landing/exterior_detail.jpeg' alt="Car exaust"/>
            </div>
            </div>
            <div className="service-each service-each-reverse row-reverse">
            <div className="service-details">
                <h2 className="title-md text-right">Glass Coating</h2>
                <p className="text service-desc text-right">
                    Our specialized ceramic window coating provides an extra layer of clarity, protection, and performance for 
                    all exterior glass surfaces. Designed to repel water, dirt, ice, and road grime. This coating significantly 
                    improves visibility in rain and harsh weather conditions. It also reduces glare, makes cleaning easier, and 
                    helps prevent mineral stains from etching into the glass over time. 
                    Applied with the same precision as our paint coatings, it’s a smart, lasting upgrade that enhances both safety 
                    and aesthetics.
                </p>
                <div className="flex justify-end">
                    <a href="/book" className="button">Book Now</a>
                </div>
            </div>
            <div className="service-img service-img-reverse">
                <img src='/landing/interior_detail.jpg' alt="Cleaning interior car"/>
            </div>
            </div>
            <div className="service-each">
            <div className="service-details">
                <h2 className="title-md">Free Delivery</h2>
                <p className="text service-desc">
                    We offer free vehicle delivery because we believe a premium service should extend beyond the coating itself. 
                    From the moment your vehicle enters our studio, it's treated with the highest level of care. It is cleaned, 
                    decontaminated, corrected, and coated to perfection. Once the process is complete and the coating has cured in 
                    our controlled environment, we deliver your vehicle directly back to you. No waiting rooms, no hassle. 
                    Just a seamless, white-glove experience that saves you time while ensuring your vehicle arrives protected, 
                    polished, and ready to leave impressions.
                </p>
                <div className="flex">
                    <a href="/book" className="button">Book Now</a>
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