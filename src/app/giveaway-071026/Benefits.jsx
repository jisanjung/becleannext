export default function Benefits() {
  return (
    <section className="w-full py-16">
      <div className="max-w-5xl mx-auto px-4 md:px-10">
        <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-12">
          Benefits of Ceramic Coating
        </h2>

        <div className="space-y-10 text-black">
          <div>
            <h3 className="text-xl font-bold mb-2">Protection</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Shields paint from UV rays, oxidation, and fading</li>
              <li>Resists chemical etching from bird droppings, tree sap, and acid rain</li>
              <li>Provides a hard sacrificial layer against light scratches and swirl marks</li>
              <li>Repels water, dirt, and road grime (hydrophobic effect)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Aesthetics</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Dramatically enhances gloss and paint depth</li>
              <li>Keeps the vehicle looking freshly detailed for longer</li>
              <li>Reduces water spotting significantly</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Slickness & Tactile Feel</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Creates an extraordinarily slick, glass-like surface</li>
              <li>Contaminants and brake dust struggle to adhere</li>
              <li>Water beads and sheets off efficiently</li>
              <li>That "just waxed" slickness becomes the baseline</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Practical & Financial</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reduces washing frequency</li>
              <li>Lowers long-term detailing costs</li>
              <li>Preserves resale value</li>
              <li>Outlasts traditional waxes and sealants</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Durability</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Bonds chemically to the clear coat</li>
              <li>Withstands high heat and harsh conditions</li>
              <li>Semi-permanent protection that won't wash away</li>
            </ul>
          </div>
        </div>
      </div>
       {/* ENTER GIVEAWAY BUTTON */}
      <div className="mt-12 text-center">
        <a
          href="#giveaway-form"
          className="inline-block bg-[#4BB3C7] text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition"
        >
          ENTER GIVEAWAY
        </a>

        <p className="mt-4 text-xs text-black">
        NO PURCHASE NECESSARY. Open to eligible participants.
        Ends July 10th at 11:59 PM. See{" "}
        <a href="#rules" className="underline hover:text-black/70 transition-colors"> Official Rules</a>{" "}below.
      </p>
        
      </div>
    </section>
  )
}