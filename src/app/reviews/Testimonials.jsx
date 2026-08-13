"use client"

import { useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: "harrison",
    image: "/reviews/review1.jpeg",
  },
  {
    id: "kobey",
    image: "/reviews/review2.jpeg",
  },
  {
    id: "molly",
    image: "/reviews/review3.jpeg",
  },
  {
    id: "tony",
    image: "/reviews/review4.jpeg",
  },
  {
    id: "scott-s",
    image: "/reviews/review5.jpeg",
  },
  {
    id: "logan",
    image: "/referral/review5.PNG",
  },
  {
    id: "jimmy",
    image: "/referral/review1.png",
  },
    {
    id: "jenny",
    image: "/referral/review2.png",
  },
    {
    id: "nAte",
    image: "/referral/review3.png",
  },
  {
    id: "scott-h",
    image: "/referral/review7.PNG",
  },
  {
    id: "denny",
    image: "/reviews/review6.JPG",
  },
    {
    id: "wren",
    image: "/reviews/review7.JPG",
  },
    {
    id: "rob-s",
    image: "/reviews/review8.JPG",
  },
    {
    id: "patrick-e",
    image: "/reviews/review9.JPG",
  },
    {
    id: "lauren-peterson",
    image: "/reviews/review10.JPG",
  },
    {
    id: "tyisha-j",
    image: "/reviews/review11.JPG",
  },
    {
    id: "kelsey-h",
    image: "/reviews/review12.JPG",
  },
    {
    id: "john-cavet",
    image: "/reviews/review13.JPG",
  },
    {
    id: "bretton",
    image: "/reviews/review14.JPG",
  },
    {
    id: "andrew-seidler",
    image: "/reviews/review15.JPG",
  },
    {
    id: "george-provalone",
    image: "/reviews/review16.JPG",
  },
    {
    id: "allie-kemp",
    image: "/reviews/review17.JPG",
  },
    {
    id: "andrew-le",
    image: "/reviews/review18.JPG",
  },
    {
    id: "mia-camp",
    image: "/reviews/review19.JPG",
  },
    {
    id: "shaun-humphrey",
    image: "/reviews/review20.JPG",
  },
    {
    id: "taylor-scher",
    image: "/reviews/review21.JPG",
  },
    {
    id: "user",
    image: "/reviews/review22.JPG",
  },
    {
    id: "will-camp",
    image: "/reviews/review23.JPG",
  },
    {
    id: "jon-adderly",
    image: "/reviews/review24.JPG",
  },
    {
    id: "joan-beattie",
    image: "/reviews/review25.JPG",
  },
    {
    id: "neighbor-barb",
    image: "/reviews/review26.JPG",
  },
    {
    id: "chris-heavener",
    image: "/reviews/review27.JPG",
  },
]

export default function Testimonials() {
  const [selectedReview, setSelectedReview] = useState(null)

  const openModal = (review) => {
    setSelectedReview(review)
  }

  const closeModal = () => {
    setSelectedReview(null)
  }

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center text-black mb-3">
          Customer Reviews
        </h2>

        <p className="text-center text-gray-500 mb-10 max-w-md mx-auto">
          See what our customers have to say about their ceramic coating experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {testimonials.map((review) => (

            <button
              key={review.id}
              type="button"
              onClick={() => openModal(review)}
              className="relative w-full h-80 rounded-xl overflow-hidden hover:opacity-50 transition"
            >

              <Image
                src={review.image}
                alt="Customer testimonial"
                fill
                className="object-contain bg-white"
              />

            </button>

          ))}

        </div>

      </div>

      {selectedReview && (

        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-5"
          onClick={closeModal}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#FEFEFE] rounded-3xl max-w-3xl w-full overflow-hidden p-6 sm:p-8"
            >

            {/* Background Pattern */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/gallery/wasp.jpeg')",
                backgroundRepeat: "repeat",
                backgroundSize: "45px",
                backgroundPosition: "0 0",
              }}
            />

            {/* Cover behind close button */}
            <div className="absolute top-0 left-0 right-0 h-[100px] bg-[#FEFEFE] z-10" />

            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-[#2F2B2B] flex items-center justify-center z-20"
            >
              <span className="text-[#BDBDBD] text-xl leading-none">
                ×
              </span>
            </button>

            <div className="relative z-10 p-4 sm:p-8">

              <div className="flex justify-center pt-6">

                    <Image
                    src={selectedReview.image}
                    alt="Customer testimonial"
                    width={700}
                    height={1000} // use the approximate aspect ratio of your screenshots
                    className="w-full max-w-[700px] h-auto rounded-xl border-4 border-white shadow-2xl"
                />

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  )
}