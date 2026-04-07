import Image from "next/image"

export default function Reviews() {
  const reviews = [
    "/reviews/review1.jpeg",
    "/reviews/review2.jpeg",
    "/reviews/review3.jpeg",
  ]

  return (
    <section className="w-full bg-[#F7F7F7] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          What Our Customers Say
        </h2>

        {/* Review Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((src, index) => (
            <div
              key={index}
              className="w-full rounded-2xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`Customer review ${index + 1}`}
                width={600}       // allow larger images
                height={400}      // approximate, can adjust per image
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}