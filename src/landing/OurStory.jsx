const OurStory = () => {
  return (
    <section id="ourStorySection" className="section bg-white">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">Our Story</span>
          <h2 className="heading mt-3">Built from a lifelong love of cars.</h2>
        </div>
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-ink/70">
          <p>
            Growing up as a mechanic’s son, our founder Pennington Nguyen has been around cars his entire life. From an early age, he learned how to detail from his father and fell in love with the brilliant shine that follows a fresh wax. Years later, while working as a marketing director at a dealership, being surrounded by new automobiles reignited that passion, leading to the creation of beclean. Driven to bring that same level of refinement to others, beclean was built to deliver a premium ceramic coating experience.
          </p>
          <p>
            Years of relentless focus, testing, and refinement led to the creation of the world’s first detailing studio dedicated solely to ceramic coatings. The result is the ultimate ceramic coating experience. By specializing exclusively in coatings, we deliver unmatched gloss, protection, and precision your vehicle won’t find anywhere else. We don’t just make your car shine brighter, last longer, and turn heads, it’s all we do.
          </p>
          <p className="border-l-2 border-brand pl-6 text-ink">
            Our mission is to bring elegance, brilliance, and refinement to everyone. We will accomplish this by raising the standard of what a ceramic coating should be at every stage. Our goal is simple: to help our customers leave a lasting impression, backed by unmatched protection and a finish that radiates confidence and undeniable presence.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurStory;
