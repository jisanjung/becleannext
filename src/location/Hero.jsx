import Image from "next/image"
import Link from "next/link"

export default function Hero({ location, heroImgPath }) {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[420px] flex items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <Image
          src={heroImgPath}
          alt={`${location} Ceramic Coating`}
          fill
          priority
          className="object-cover object-[center_70%]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-6">

          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            {location} Ceramic Coating Services
          </h1>

          <Link
            href="/book"
            className="bg-[#43BDD5] hover:bg-[#38a9bf] text-white px-6 py-3 rounded-full text-sm font-medium transition"
          >
            Book Now
          </Link>

        </div>
      </section>

      {/* CONVENIENCE & EXCLUSIVE CARDS */}
      <section className="bg-black text-white py-20 px-6 flex justify-center">
        <div className="max-w-4xl w-full space-y-8">

          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            What Makes our {location}
            <br />
            Ceramic Coating Services Different?
          </h2>

          {/* CONVENIENCE CARD */}
          <div className="border border-[#C9A227] rounded-xl p-10 text-center">

            <p className="text-[#43BDD5] font-semibold mb-2">
              Free Pickup and Same-Day Delivery
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Completely Convenient.
              <br />
              Harleysville + 50 Mile Radius.
            </h3>

            <p className="text-white max-w-2xl mx-auto mb-8">
              Whether at your {location} home, work, or business we pick up your car
              and return it ceramic coated. Our free pickup and delivery service
              completely removes the pain of having to rearrange your life to get
              your car coated. If you are within 50 miles of Harleysville, you’re
              within our range.
            </p>

            {/* MAP IMAGE */}
            <div className="flex justify-center">
              <div className="relative w-[190px] h-[190px] rounded-lg overflow-hidden">
                <Image
                  src="/referral/location.png"
                  alt="50 mile pickup and delivery radius"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>

          {/* EXCLUSIVE CARD */}
          <div className="border border-[#C9A227] rounded-xl p-10 text-center">

            <p className="text-[#43BDD5] font-semibold mb-2">
              Exclusive
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Reserved for You.
            </h3>

            <p className="text-white max-w-2xl mx-auto mb-8">
              When you book a coating with beclean, you reserve the entire
              studio exclusively for your vehicle. While your car is with us, it
              receives our undivided attention, resulting in superior craftsmanship
              and efficient turnaround. The outcome is a vehicle that stands apart
              on the roads of {location}. If you value an exclusive, focused
              experience, beclean Ceramic Coating Studio of {location} is built for you.
            </p>

            {/* ICON */}
            <div className="flex justify-center">
              <div className="relative w-[120px] h-[120px] flex items-center justify-center">
                
                {/* Wreath */}
                <Image
                   src="/location/wreath_white.png"
                   alt="exclusive service"
                   width={120}
                   height={120}
                   className="absolute top-[2%] left-[52%] -translate-x-1/2 scale-[0.95]"
                />

                {/* Number */}
                <span className="relative text-5xl font-bold text-white">
                  1
                </span>

              </div>
            </div>

          </div>

          {/* ADDITIONAL CARD BELOW EXCLUSIVE */}
          <div className="border border-[#C9A227] rounded-xl p-10 text-center">

            <p className="text-[#43BDD5] font-semibold mb-2">
              Fast
            </p>

            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Same Day Turnaround
            </h3>

            <p className="text-white max-w-2xl mx-auto mb-8">
              While other ceramic coating installers require multiple days to complete a ceramic coating, beclean ceramic coating studio of {location} will get your car returned to you by the end of the day. How we accomplish this is by using the latest in ceramic coating technology, innovative industry techniques, and focusing only on your car. If you desire to have your car on the roads of {location} rather than waiting, we are the ones for you. 
            </p>

            {/* OPTIONAL IMAGE */}
            <div className="flex justify-center">
              <div className="relative w-[130px] h-[130px] rounded-lg overflow-hidden">
                <Image
                  src="/wasp.png"
                  alt="consultation illustration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}