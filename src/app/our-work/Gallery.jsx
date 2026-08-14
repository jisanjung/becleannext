"use client"

import { useState } from "react"
import Image from "next/image"

const gallery = [
  {
    id: "audi-sq5",
    name: "Audi SQ5",
    images: [
      "/gallery/audi-sq5.jpg",
      "/gallery/audi-sq5-2.jpg",
      "/gallery/audi-sq5-3.jpg",
      "/gallery/audi-sq5-4.jpg",
    ],
  },
  {
    id: "subaru-wrx-sti",
    name: "Subaru WRX STI",
    images: [
      "/gallery/subaru-wrx-sti.jpg",
      "/gallery/subaru-wrx-sti-2.jpg",
    ],
  },
  {
    id: "porche-panamera",
    name: "Porsche Panamera",
    images: [
      "/referral/work_example1.JPG",
    ],
  },
  {
    id: "subaru-wrx",
    name: "Subaru WRX",
    images: [
      "/gallery/subaru-wrx.jpg",
      "/gallery/subaru-wrx-2.jpg",
      "/gallery/subaru-wrx-3.jpg",
      "/gallery/subaru-wrx-4.jpg",
    ],
  },
  {
    id: "audi-s4",
    name: "Audi S4",
    images: [
      "/gallery/audi-s4.jpg",
      "/gallery/audi-s4-2.jpg",
      "/gallery/audi-s4-3.jpg",
      "/gallery/audi-s4-4.jpg",
    ],
  },
  {
    id: "jeep-wrangler-red",
    name: "Jeep Wrangler",
    images: [
      "/gallery/jeep-wrangler-red.jpg",
      "/gallery/jeep-wrangler-red-2.jpg",
      "/gallery/jeep-wrangler-red-3.jpg",
      "/gallery/jeep-wrangler-red-4.jpg",
    ],
  },
  {
    id: "lexus-ux",
    name: "Lexus UX",
    images: [
      "/gallery/lexus-ux.jpg",
      "/gallery/lexus-ux-2.jpg",
      "/gallery/lexus-ux-3.jpg",
      "/gallery/lexus-ux-4.jpg",
    ],
  },
  {
    id: "fj-cruiser",
    name: "FJ Cruiser",
    images: [
      "/gallery/fj-cruiser.jpg",
    ],
  },
  {
    id: "volkswagen-golf-gti",
    name: "Volkwagen Golf GTI",
    images: [
      "/referral/work_example5.JPG",
    ],
  },
  {
    id: "lexus-rz",
    name: "Lexus RZ",
    images: [
      "/gallery/lexus-rz.jpg",
      "/gallery/lexus-rz-2.jpg",
      "/gallery/lexus-rz-3.jpg",
      "/gallery/lexus-rz-4.jpg",
    ],
  },
  {
    id: "audi-a3",
    name: "Audi A3",
    images: [
      "/gallery/audi-a3.jpg",
    ],
  },
  {
    id: "ram1500pete",
    name: "RAM 1500",
    images: [
      "/gallery/ram1500pete.jpg",
      "/gallery/ram1500pete_2.jpg",
      "/gallery/ram1500pete_3.jpg",
      "/gallery/ram1500pete_4.jpg",
    ],
  },
  {
    id: "tesla-model-y",
    name: "Tesla Model Y",
    images: [
      "/referral/work_example9.JPG",
    ],
  },
  {
    id: "jeep-wrangler-pink",
    name: "Jeep Wrangler",
    images: [
      "/gallery/jeep-wrangler-pink.jpg",
      "/gallery/jeep-wrangler-pink-2.jpg",
      "/gallery/jeep-wrangler-pink-3.jpg",
      "/gallery/jeep-wrangler-pink-4.jpg",
    ],
  },
  {
    id: "audi-a7",
    name: "Audi A7",
    images: [
      "/gallery/audi-a7.jpg",
    ],
  },
  {
    id: "dodge-charger",
    name: "Dodge Charger",
    images: [
      "/referral/work_example12.JPG",
    ],
  },
  {
    id: "toyota-tacoma",
    name: "Toyota Tacoma",
    images: [
      "/gallery/toyota-tacoma.jpg",
      "/gallery/toyota-tacoma-2.jpg",
      "/gallery/toyota-tacoma-3.jpg",
    ],
  },
    {
    id: "honda-pilot",
    name: "Honda Pilot",
    images: [
      "/gallery/honda-pilot.jpg",
      "/gallery/honda-pilot-2.jpg",
      "/gallery/honda-pilot-3.jpg",
    ],
  },
  {
    id: "honda-civic",
    name: "Honda Civic",
    images: [
      "/gallery/honda-civic.jpg",
      "/gallery/honda-civic-2.jpg",
    ],
  },
  {
    id: "gmc-yukon-denali",
    name: "GMC Yukon Denali",
    images: [
      "/referral/work_example4.JPG",
    ],
  },
  {
    id: "ram-1500",
    name: "RAM 1500",
    images: [
      "/referral/work_example13.JPG",
    ],
  },
  {
    id: "toyota-highlander",
    name: "Toyota Highlander",
    images: [
      "/referral/work_example2.JPG",
    ],
  },
  {
    id: "lexus-rx350",
    name: "Lexus RX350",
    images: [
      "/referral/work_example8.JPG",
    ],
  },
  {
    id: "maxda-cx-9",
    name: "Mazda CX-9",
    images: [
      "/gallery/mazda-cx-9.jpg",
    ],
  },
  {
    id: "ford-f-150",
    name: "Ford F-150",
    images: [
      "/referral/work_example11.JPG",
    ],
  },
  {
    id: "nissan-rouge",
    name: "Nissan Rouge",
    images: [
      "/gallery/nissan-rouge.jpg",
    ],
  },
  {
    id: "toyota-corolla",
    name: "Toyota Corolla",
    images: [
      "/referral/work_example10.JPG",
    ],
  },
]

export default function Gallery() {
  const [selectedCar, setSelectedCar] = useState(null)
  const [activeImage, setActiveImage] = useState("")

  const openModal = (car) => {
    setSelectedCar(car)
    setActiveImage(car.images[0])
  }

  const closeModal = () => {
    setSelectedCar(null)
    setActiveImage("")
  }

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center text-black mb-3">
          Our Work
        </h2>

        <p className="text-center text-gray-500 mb-10 max-w-md mx-auto">
          Check out the work we did on the cars below. Yours might be next.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {gallery.map((car) => (

            <div key={car.id}>

              <button
                type="button"
                onClick={() => openModal(car)}
                className="relative w-full h-80 rounded-xl overflow-hidden hover:opacity-90 transition"
              >

                <Image
                  src={car.images[0]}
                  alt={car.name}
                  fill
                  className="object-cover"
                />

              </button>

              <p className="mt-3 text-lg font-medium text-black">
                {car.name}
              </p>

            </div>

          ))}

        </div>

      </div>

      {selectedCar && (

        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-2 sm:p-5"
          onClick={closeModal}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#FEFEFE] rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
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

            <div className="absolute top-0 left-0 right-0 h-[100px] bg-[#FEFEFE] z-10" />      

            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#2F2B2B] flex items-center justify-center z-20"
            >
              <span className="text-[#BDBDBD] text-xl leading-none">
                ×
              </span>
            </button>

            <div className="relative z-10 p-4 sm:p-8">

              <h2 className="text-2xl sm:text-4xl font-bold text-black mb-6 sm:mb-10">
                {selectedCar.name}
              </h2>

              {/* Main Image */}

              <div className="flex justify-center mb-10">

                <div className="relative w-full max-w-[450px] aspect-[6/5] rounded-xl overflow-hidden border-4 border-white shadow-2xl">

                  <Image
                    src={activeImage}
                    alt={selectedCar.name}
                    fill
                    className="object-cover"
                  />

                </div>

              </div>

              {/* Thumbnails */}

              {selectedCar.images.length > 1 && (

                <div className="flex flex-wrap justify-center gap-6">

                  {selectedCar.images.slice(1).map((image, index) => (

                    <button
                      key={index}
                      onClick={() => setActiveImage(image)}
                      className={`relative w-40 h-32 rounded-lg overflow-hidden shadow-lg transition hover:scale-105 ${
                        activeImage === image
                          ? "ring-4 ring-[#43BDD5]"
                          : ""
                      }`}
                    >

                      <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover"
                      />

                    </button>

                  ))}

                </div>

              )}

            </div>

          </div>

        </div>

      )}

    </section>
  )
}