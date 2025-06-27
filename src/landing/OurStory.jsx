import './styles/ourstory.css';

const OurStory = ({ className }) => {
  return (
    <section id="ourStorySection" className={`${className}`}>
        <div className="container">
            <h2 className="title-sm text-center">Our Story</h2>
            <p className="text text-center">
            Growing up as a mechanic’s son, our founder Pennington Nguyen has been around cars his entire life. From an early age, he learned how to detail from his father and fell in love with the brilliant shine that follows a fresh wax. Years later, while working as a marketing director at a dealership, being surrounded by new automobiles reignited that passion, leading to the creation of beclean. Driven to bring that same level of refinement to others, beclean was built to deliver a premium ceramic coating experience.
            </p>
            <br/>
            <p className="text text-center">
            beclean is a detailing studio dedicated exclusively to enhancing the image of your car. While other shops offer general services, our singular focus sets us apart. We specialize in making your vehicle shine brighter, last longer, and turn heads every time it hits the road.
            </p>
            <br/>
            <p className="text text-center">
            Our mission is to bring elegance, brilliance, and refinement to everyone. We will accomplish this by raising the standard of what a ceramic coating should be at every stage. Our goal is simple: to help our customers leave a lasting impression, backed by unmatched protection and a finish that radiates confidence and undeniable presence.
            </p>
        </div>
    </section>
  )
}

export default OurStory