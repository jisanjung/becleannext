'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

const cards = [
  {
    title: 'Free Pickup & Same-Day Delivery',
    subtitle: `Harleysville \n+ 50 Mile Radius.`,
    description: 'We offer free pickup and same-day delivery within 50 miles.',
    bg: 'bg-[linear-gradient(135deg,#000000_0%,#000000_30%,#43BDD5_50%,#43BDD5_100%)]',
    image: '/referral/location.png',
    modalType: 'pickup', 
    modalImage: '/services/m4_green.png',
    extraContent: [
      {
        title: 'Customized scheduling.',
        text: 'Select your car, choose your coating, and secure your date in minutes.'
      }
    ]
  },
  {
    title: 'Exclusive',
    subtitle: 'Reserved Only For You.',
    description: 'Your vehicle is never stacked with others. Total focus.',
    bg: 'bg-black',
    image: '/services/ceramic_coating_application.jpg',
    modalType: 'exclusive'
  },
  {
    title: 'Fast',
    subtitle: 'Same Day Turnaround.',
    description: 'Drop it off in the morning. Drive it home protected.',
    bg: 'bg-[#FFFFFF]',
    textColor: 'text-black',
    image: '/services/logo_wasp_array.png',
    modalType: 'fast'
  },
  {
    title: '6 Month Guarantee',
    subtitle: 'Our Promise to You',
    description: 'If something fails, we correct it. Period.',
    bg: 'bg-[linear-gradient(to_bottom,#43BDD5_0%,#43BDD5_35%,#FFFFFF_100%)]',
    image: '/level_1_hero.png',
    topImage: '/icons/guarantee_white.png',
    modalType: 'guarantee'
  },
  {
    title: 'Warranty',
    subtitle: 'Your Investment Guaranteed.',
    description: 'Registered ceramic coating warranty included.',
    bg: 'bg-[linear-gradient(to_bottom,#B59C48_0%,#B59C48_35%,#FFFFFF_100%)]',
    image: '/icons/car_outline_white.png',
    topImage: '/icons/warranty_white.png',
    modalType: 'warranty'
  },
  {
    title: 'Gift Box',
    subtitle: 'Ceramic Coating Gift Box.',
    description: 'Premium aftercare kit included.',
    bg: 'bg-[#363434]',
    image: '/services/gift_box.JPG',
    modalType: 'gift'
  }
]

const ModalWrapper = ({ children, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-3 sm:px-4"
    onClick={onClose}
  >
    <div
      className="
        bg-[#FEFEFE]
        w-full
        max-w-lg sm:max-w-4xl
        rounded-2xl sm:rounded-3xl
        p-4 sm:p-6 md:p-8
        relative
        overflow-y-auto
        max-h-[92vh]
      "
      onClick={(e) => e.stopPropagation()}
    >

      <button
        onClick={onClose}
        className="
          absolute
          top-3 right-3
          sm:top-4 sm:right-4
          h-8 w-8
          rounded-full
          bg-[#2F2B2B]
          flex items-center justify-center
          text-sm font-semibold
          text-[#BDBDBD]"
      >
        ✕
      </button>

      {children}
    </div>
  </div>
)

// --- Individual Modals (all content untouched) ---
const PickupModal = ({ card, onClose }) => (
  <ModalWrapper onClose={onClose}>
    <p className="text-sm font-semibold mb-2">{card.title}</p>
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6">Convenient. Harleysville + 50 Mile Radius.</h3>

    <div className="bg-[#F5F5F7] rounded-2xl p-5 sm:p-6">
      <p className="text-gray-800 leading-relaxed text-[15px] sm:text-base">
        <span className="font-semibold">Effortless convenience.</span> Our free pickup and same-day delivery service is built for those who move with intention. You don’t need to rearrange your life to protect your vehicle. We’ll meet you where you are. We arrive, retrieve, and return your vehicle coated, transformed, and ready, all in the same day. It’s seamless, efficient, and discreet. Excellence should never be inconvenient.
      </p>
      <div className="mt-6 relative w-full h-64 flex justify-center overflow-hidden">
        <Image
          src={card.modalImage}
          alt="Vehicle"
          fill
          className="object-contain scale-125"
        />
      </div>
    </div>

    <div className="bg-[#F5F5F7] rounded-2xl p-5 sm:p-6 mt-6 flex flex-col md:flex-row gap-6 items-center">
      <div className="flex-1 order-1">
        <p className="font-semibold mb-2 leading-relaxed text-[15px] sm:text-base">Customized scheduling.</p>
        <p className="text-gray-800 leading-relaxed text-[15px] sm:text-base">Booking with beclean is designed for effortless precision. Simply select your car, your desired coating, and pick a date.</p>
        <div className="mt-6 space-y-4">
          {["Easy booking", "Secure your date", "Transformation in a few clicks"].map((item,i)=>(
            <div key={i} className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-full border-2 border-green-500 flex items-center justify-center text-green-500 text-sm">✓</div>
              <span className="text-gray-800 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 relative h-40 w-full order-2">
      <Image
        src="/icons/calendar.png"
        alt="Calendar"
        fill
        className="object-contain"
      />
    </div>
    </div>
  </ModalWrapper>
)

const ExclusiveModal = ({ card, onClose }) => (
  <ModalWrapper onClose={onClose}>
    <p className="text-sm font-semibold mb-2">{card.title}</p>
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6">Reserved Only For You.</h3>

    <div className="bg-[#F5F5F7] rounded-2xl p-5 sm:p-6">
      <p className="text-gray-800 leading-relaxed text-[15px] sm:text-base">
        <span className="font-semibold">Reserved for a single purpose.</span> At beclean, exclusivity lives in our singular focus on ceramic coatings. We dedicate ourselves to mastering one craft; protecting and perfecting your vehicle’s finish like no other. Accepting only one ceramic coating appointment per day allows us to pour every ounce of expertise, precision, and care into your car’s transformation. This isn’t a service for the many; it’s an elite experience for those who understand that true brilliance comes from unwavering dedication to one pursuit.
      </p>
      <div className="mt-6 relative w-full h-56 sm:h-72">
        <Image
          src="/services/ceramic_coating_application.jpg"
          alt="Ceramic coating application"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  </ModalWrapper>
)

const FastModal = ({ card, onClose }) => (
  <ModalWrapper onClose={onClose}>
    <p className="text-sm font-semibold mb-2">{card.title}</p>
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6">Same Day Turnaround</h3>

    <div className="bg-[#F5F5F7] rounded-2xl p-5 sm:p-6">
      <p className="text-gray-800 leading-relaxed text-[15px] sm:text-base">
        <span className="font-semibold">Created for speed.</span> While other ceramic coating installers require multiple days to complete a ceramic coating, beclean ceramic coating studio will get your car returned to you by the end of the day. This is accomplished through the latest ceramic coating technology, innovative industry techniques, and a workflow designed around one vehicle at a time.
      </p>
      <div className="mt-6 relative w-full h-56 sm:h-72 rounded-xl overflow-hidden">
        <Image
          src="/services/wasps_wreath_span_grey.png"
          alt="Same day ceramic coating turnaround"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </ModalWrapper>
)

const GuaranteeModal = ({ card, onClose }) => (
  <ModalWrapper onClose={onClose}>
    <p className="text-sm font-semibold mb-2">{card.title}</p>
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6">Our Promise to You.</h3>

    <div className="bg-[#F5F5F7] rounded-2xl p-5 sm:p-6">
      <p className="text-gray-800 leading-relaxed text-[15px] sm:text-base">
        <span className="font-semibold">Satisfaction guaranteed.</span> Our 6 month guarantee exists to ensure you are absolutely satisfied with your ceramic coating. If after 6 months you are not completely in love with how your vehicle looks and performs, we will correct the issue at no cost to you.
      </p>
      <div className="mt-6 relative w-full h-56 sm:h-72">
      <div className="relative w-full h-full">
         <Image
          src="/services/black_escalade.png"
          alt="Black Escalade"
          width={600}
          height={300}
          className="absolute top-[10%] left-[40%] -translate-x-1/2 scale-[0.85] sm:top-[-10%] sm:left-[40%] sm:scale-100"
        />

        <Image
        src="/services/little_red_corvette.png"
        alt="Red Corvette"
        width={425}
        height={200}
        className="absolute top-[20%] left-[25%] sm:top-[20%] sm:left-[50%] scale-[0.60] sm:scale-100"
      />
      </div>
    </div>
    </div>
  </ModalWrapper>
)

const WarrantyModal = ({ card, onClose }) => (
  <ModalWrapper onClose={onClose}>
    <p className="text-sm font-semibold mb-2">{card.title}</p>
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6">
      Your Investment Guaranteed.
    </h3>

    <div className="bg-[#F5F5F7] rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center gap-6">
      
      <div className="flex-1">
        <p className="text-gray-800 leading-relaxed text-[15px] sm:text-base">
          <span className="font-semibold">Your investment protected.</span> Our ceramic
          coating services include a registered warranty designed to ensure your
          coating performs for the journeys ahead. Simply return once per year
          for your annual inspection, warranty wash, and topper application.
          This keeps your coating fresh, smooth, and continuously repelling
          contamination.
        </p>
      </div>

      <div className="flex-1 relative w-full h-56">
        <Image
          src="/icons/warranty_black.png"
          alt="Ceramic coating warranty"
          fill
          className="object-contain"
        />
      </div>

    </div>
  </ModalWrapper>
)

const GiftModal = ({ card, onClose }) => (
  <ModalWrapper onClose={onClose}>
    <p className="text-sm font-semibold mb-2">{card.title}</p>

    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-6">
      Ceramic Coating Gift Box.
    </h3>

    <div className="bg-[#F5F5F7] rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center gap-6">

      <div className="flex-1">
        <p className="text-gray-800 leading-relaxed text-[15px] sm:text-base mb-5">
          <span className="font-semibold">A personal touch.</span> Our ceramic
          coating services don’t end when we drop off your car. The gift box is
          there to make sure the curing process goes smoothly.
        </p>

        <h4 className="font-semibold mb-2 text-[15px] sm:text-base">
          What’s included?
        </h4>

        <ul className="list-disc pl-5 text-gray-700 space-y-1 text-[15px] sm:text-base">
          <li>Quick Detailer</li>
          <li>Soft Microfiber Towel</li>
          <li>Warranty Card</li>
          <li>Stickers</li>
        </ul>
      </div>

      <div className="flex-1 relative w-full h-64">
        <Image
          src="/services/gift_box.JPG"
          alt="Ceramic coating gift box"
          fill
          className="object-cover object-[50%_75%] rounded-xl"
        />
      </div>

    </div>
  </ModalWrapper>
)

export default function Slideshow() {
  const scrollRef = useRef(null)
  const [activeCard, setActiveCard] = useState(null)
  const [scrollIndex, setScrollIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(3.2)

  useEffect(() => {
    const handleResize = () => setVisibleCards(window.innerWidth < 640 ? 1.5 : 3.2)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.offsetWidth / visibleCards
    let newIndex = scrollIndex
    if (direction === 'next') newIndex = Math.min(scrollIndex + 1, cards.length - Math.floor(visibleCards))
    else newIndex = Math.max(scrollIndex - 1, 0)
    scrollRef.current.scrollTo({ left: cardWidth * newIndex, behavior: 'smooth' })
    setScrollIndex(newIndex)
  }

const touchStartX = useRef(0)
const touchEndX = useRef(0)

const handleTouchStart = (e) => {
  if (window.innerWidth >= 640) return
  touchStartX.current = e.touches[0].clientX
}

const handleTouchMove = (e) => {
  if (window.innerWidth >= 640) return
  touchEndX.current = e.touches[0].clientX
}

const handleTouchEnd = () => {
  if (window.innerWidth >= 640) return
  const deltaX = touchStartX.current - touchEndX.current
  if (deltaX > 50) scroll('next')      // swipe left
  else if (deltaX < -50) scroll('prev') // swipe right
}

  const getPrevColor = () => (scrollIndex === 0 ? '#ECECEE' : '#D9D9D9')
  const getNextColor = () => scrollIndex >= cards.length - visibleCards ? '#ECECEE' : '#D9D9D9'
  const getPrevChevronColor = () => (scrollIndex === 0 ? '#838383' : '#2F2B2B')
  const getNextChevronColor = () => scrollIndex >= cards.length - visibleCards ? '#838383' : '#2F2B2B'

  return (
    <section className="bg-[#F7F7F7] py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Why beclean is the best place to <br />
          get a ceramic coating service.
        </h2>

        <div ref={scrollRef}
  className="flex overflow-x-hidden scroll-smooth"
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}>
          {cards.map((card,index)=>(
            <div key={index} className="px-3 cursor-pointer min-w-[66.6667%] sm:min-w-[31.25%]" onClick={()=>setActiveCard(card)}>
              <div className={`rounded-2xl p-4 sm:p-6 h-[420px] sm:h-[550px] ${index===2?'text-black':'text-white'} ${card.bg} relative flex flex-col`}>
                <div className="mb-2 sm:mb-4">
                  <p className="text-xs sm:text-base font-bold">{card.title}</p>
                  <h3 className="text-base sm:text-xl font-bold mt-1 whitespace-pre-line">{card.subtitle}</h3>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end mt-2 sm:mt-4 pb-14 sm:pb-20">
                  {card.topImage ? (
                    <div className="flex flex-col items-center gap-[1px] sm:gap-[2px]">
                      <div className="relative w-24 sm:w-32 h-16 sm:h-20">
                      <Image
                        src={card.topImage}
                        alt={`${card.title} Icon`}
                        width={70}
                        height={70}
                        className="absolute top-[0%] left-[50%] sm:top-[40%] sm:left-[50%] -translate-x-1/2 scale-[1] sm:scale-[1.1]"
                      />
                    </div>
                      <div className="relative w-40 sm:w-64 h-40 sm:h-64 rounded-xl overflow-hidden">
                        <Image src={card.image} alt={card.title} fill className="object-contain"/>
                      </div>
                    </div>
                  ):(
                    <div className="relative w-40 sm:w-56 h-40 sm:h-56 rounded-xl overflow-hidden">
                      <Image src={card.image} alt={card.title} fill className="object-cover"/>
                    </div>
                  )}
                </div>
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 h-10 w-10 rounded-full bg-[#2F2B2B] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#BDBDBD]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <button onClick={()=>scroll('prev')} style={{backgroundColor:getPrevColor()}} className="h-10 w-10 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke={getPrevChevronColor()} strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button onClick={()=>scroll('next')} style={{backgroundColor:getNextColor()}} className="h-10 w-10 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke={getNextChevronColor()} strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {activeCard && (
        activeCard.modalType==='pickup'? <PickupModal card={activeCard} onClose={()=>setActiveCard(null)}/> :
        activeCard.modalType==='exclusive'? <ExclusiveModal card={activeCard} onClose={()=>setActiveCard(null)}/> :
        activeCard.modalType==='fast'? <FastModal card={activeCard} onClose={()=>setActiveCard(null)}/> :
        activeCard.modalType==='guarantee'? <GuaranteeModal card={activeCard} onClose={()=>setActiveCard(null)}/> :
        activeCard.modalType==='warranty'? <WarrantyModal card={activeCard} onClose={()=>setActiveCard(null)}/> :
        activeCard.modalType==='gift'? <GiftModal card={activeCard} onClose={()=>setActiveCard(null)}/> :
        null
      )}
      </div>
    </section>
  )
}