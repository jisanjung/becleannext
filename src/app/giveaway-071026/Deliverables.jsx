import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const includedItems = [
  {
    id: 'guarantee',
    title: 'Free Pickup & Same-Day Delivery',
    icon: '/services/guarantee_blue.png',
    modalImage: '/services/guarantee_blue.png',
    description:
      'Gone are the days of losing your car when you get your car ceramic coated. When we pick up your vehicle at your work, business, or home, we intend to drop it off the same exact day.',
  },
  {
    id: 'warranty',
    title: 'Warranty',
    icon: '/services/warranty_blue.png',
    modalImage: '/services/warranty_blue.png',
    description:
      'All our ceramic coating services are designed to accompany your vehicle for the long-term. The warranty is there to make sure of it.',
  },
  {
    id: 'giftbox',
    title: 'Gift Box',
    icon: '/services/gift_blue.png',
    modalImage: '/services/gift_box.JPG',
    description:
      'Our ceramic coating services doesn’t end when your car leaves the studio. The included gift box ensures the curing process is seamless. During the 7-day curing window, use the provided quick detailer and microfiber towel to address bird droppings, tar, or other contaminants',
  },
]

export default function Deliverables() {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <section className="w-full bg-[#F7F7F7] pb-16">

  {/* Blue Header Banner */}
  <div className="bg-[#7DD0E0] py-8 mb-8">
    <div className="max-w-7xl mx-auto px-4 md:px-10">
      <h2 className="text-2xl font-bold text-black lg:text-5xl">
        What's Included in Our 9 Year
        <br />
        Ceramic Coating Giveaway?
      </h2>
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-4 md:px-10">

    <p className="text-lg lg:text-xl max-w-full lg:max-w-none">
      At beclean Ceramic Coating Studio, our ceramic coatings are designed for owners who want extended ceramic protection. The service is structured for durability, gloss, and surface performance over years of real-world driving. Because lasting protection is measured not just by the coating applied, but by how your vehicle holds its finish over time.
    </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {includedItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-xl border border-yellow-500/30 bg-black/80 p-6 text-left transition hover:border-yellow-500"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <span className="absolute bottom-4 right-4 text-gray-400 transition group-hover:text-white">
                +
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && setActiveItem(null)}
        >
          <div className="relative w-full max-w-lg rounded-2xl bg-[#1f1f1f] p-4 lg:p-6 text-white max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>

            <Image
              src={activeItem.modalImage}
              alt={activeItem.title}
              width={600}
              height={360}
              className="mb-4 rounded-lg object-contain w-full max-h-[180px] sm:max-h-[220px] lg:max-h-[360px]"
            />

            <h3 className="mb-2 text-xl lg:text-2xl font-bold text-white">{activeItem.title}</h3>

            <p>{activeItem.description}</p>

            {/* Gift Box extra details */}
            {activeItem.id === 'giftbox' && (
              <div className="mt-6 text-base">
                <p className="mb-4 font-bold">What’s included?</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Quick Detailer</li>
                  <li>Ultra Plush Microfiber Towel</li>
                  <li>Warranty Card</li>
                  <li>Stickers</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* READY FOR PROTECTION BUTTON */}
      <div className="mt-12 text-center">
        <Link
          href="#giveaway-form"
          className="inline-block bg-[#4BB3C7] text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition"
        >
          ENTER GIVEAWAY
        </Link>
        <p className="mt-4 text-xs text-black max-w-2xl mx-auto">
    NO PURCHASE NECESSARY. Open to eligible participants age 18 or older.
    Ends July 10, 2026 at 11:59 PM ET. See full{" "}
  <a href="#rules" className="underline hover:text-black/70 transition-colors">Official Rules</a>{" "}below.
  </p>
      </div>
    </section>
  )
}