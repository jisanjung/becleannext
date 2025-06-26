import './styles/ourstory.css';

const OurStory = ({ className }) => {
  return (
    <section id="ourStorySection" className={`${className}`}>
        <div className="container">
            <h2 className="title-sm text-center">Our Story</h2>
            <p className="text text-center">
            From the humble beginnings between a group of friends, BeClean Mobile Detailing evolved into a premier auto detailing service in the greater Philadelphia area. 
            Our ability to be mobile allows us to serve you either at work, home, or any location of convenience for you without the need for power. 
            Over years of experience, we honed our expertise to combine both the best of products and methods to be as efficient and meticulous as possible. 
            By combining these two aspects, it creates a convenient yet unparalleled automotive transformation.
            </p>
            <br/>
            <p className="text text-center">
            Our mission is to champion global cleanliness and inspire individuals to embrace cleanliness as an essential aspect of their lives. 
            We believe that every individual deserves to live in a clean environment. 
            This commitment propels us to leverage our expertise and resources to elevate standards of living. 
            We accomplish this by providing premier auto detailing services, by excellent and meticulous craftsmanship, and by imparting a higher standard of care.
            </p>
        </div>
    </section>
  )
}

export default OurStory