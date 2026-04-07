import Image from "next/image"
import Link from "next/link"

export default function Video() {
  return (
    <section className="w-full">

      {/* TOP BLACK SECTION */}
      <div className="bg-black text-white text-center pt-10 pb-40 md:pb-110 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want a <br className="md:hidden" />
            Convenient Ceramic Coating?
        </h2>

    <p className="text-xl">
        Get Our Ceramic Coating - Remove All Headaches
    </p>
    </div>

      {/* LOWER SECTION */}
      <div className="pb-20 px-6 relative">

        {/* VIDEO */}
        <div className="max-w-3xl mx-auto -mt-36 md:-mt-90 mb-10">
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0gweMXvUZkM?si=DHL8jgqE49V9TXXu"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-black mb-8">
            It’s a ceramic coating service where we come to your work,
            business, or home for free. Then we complete the service
            and return your car back to you the same day.
          </p>

          <Link
            href="#calendar"
            className="inline-block bg-[#4BB3C7] text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition"
          >
            I'M READY FOR PROTECTION
          </Link>
        </div>

      </div>

    </section>
  )
}