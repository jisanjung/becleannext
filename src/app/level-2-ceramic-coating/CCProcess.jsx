"use client";

import { useState } from "react";
import Image from "next/image";

const sideImages = {
  left: "/beclean_logo_wreath.png",
  right: "/wasp.png",
};

const steps = [
  {
    id: 0,
    title: "Pickup",
    description:
      "Your ceramic coating starts with our technicians arriving at your work, business, or home. After documenting the vehicle, we head to our ceramic coating shop to kickstart your vehicle transformation.",
    image: "/services/car_keys.jpg",
  },
  {
    id: 1,
    title: "Decontamination Wash and Photo Update",
    description:
      "Once your vehicle arrives at our ceramic coating studio, we begin the decontamination process. This includes the use of a wash, clay bar, and iron remover. The result is a smooth and clean paint that is ready for the polishing step. Knowing how much you value your vehicle, we provide a photo update of your car.",
    image: "/landing/exterior_detail.jpeg",
  },
  {
    id: 2,
    title: "Polishing",
    description:
      "Once the paint is clear from surface decontamination, our technicians at the studio begin the polishing step. The polishing step is a critical step in the ceramic coating process to create a surgically clean surface, achieving higher shine, and removing any present surface imperfections. This important step achieves the most beautiful paint possible and ensures the coating lasts as long as possible.",
    image: "/services/polishing.jpg",
  },
  {
    id: 3,
    title: "Ceramic Coating Prep",
    description:
      "After the polishing process, we do an additional polish with our adhesion promoter polish. The adhesion promoting polish not only increases shine and smoothness, but achieves maximum durability.",
    image: "/services/app.jpg",
  },
  {
    id: 4,
    title: "Ceramic Coating Application",
    description:
      "After the polishing and prep stage, we apply the ceramic coating to all painted surfaces on the vehicle, including the wheels and trim. Then we inspect the entire vehicle with our innovative high spot detection technique to ensure full and even coverage of the ceramic coating.",
    image: "/services/ceramic_coating_application.jpg",
  },
  {
    id: 5,
    title: "After Coating Update and Delivery",
    description:
      "After curing for 1 hour, the coating is ready to be delivered in all weather conditions. We will provide photo updates of your car and reach out to coordinate delivery to your work, business, or home. Once we deliver the vehicle back to you, we will give you our gift box. This includes a quick detailer and plush microfiber towel that you can use on contamination while your car fully cures. Included is your warranty information and stickers.",
    image: "/services/driveway.jpg",
  },
];

export default function CCProcess() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="w-full bg-[#363434] pt-3 pb-20 lg:pt-20">
      {/* Header */}
<div className="mb-4 flex items-center justify-center gap-2 sm:gap-2 lg:gap-6">
  <div className="relative h-20 w-20 sm:h-10 sm:w-10 lg:h-20 lg:w-20">
    <Image src={sideImages.left} alt="" fill className="object-contain" />
  </div>

  <h2 className="text-center text-xl sm:text-2xl lg:text-5xl font-bold text-white m-0">
    Our <br/>
    Ceramic Coating <br/>
    Process
  </h2>

  <div className="relative h-15 w-15 sm:h-10 sm:w-10 lg:h-15 lg:w-15">
    <Image src={sideImages.right} alt="" fill className="object-contain" />
  </div>
</div>

      {/* Intro Text */}
      <p className="mx-auto mb-10 max-w-md text-center text-white text-sm sm:text-base lg:max-w-3xl lg:text-xl px-6 sm:px-">
        At beclean Ceramic Coating Studio, our 4 year ceramic coating is designed for
        owners who want extended ceramic protection. The service is structured for
        durability, gloss, and surface performance over years of real-world driving.
        Because lasting protection is measured not just by the coating applied, but
        by how your vehicle holds its finish over time.
      </p>

      {/* Main Card Container */}
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 lg:p-10 shadow-lg">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Steps List */}
          <div className="space-y-4">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() =>
                  setActiveStep(activeStep === step.id ? null : step.id)
                }
                className={`w-full flex justify-between items-start font-semibold
                  ${
                    activeStep === step.id
                      ? "bg-gray-200 rounded-xl px-5 py-3 text-sm"
                      : "bg-gray-100 hover:bg-gray-200 rounded-full px-6 py-4 text-base"
                  }`}
                aria-expanded={activeStep === step.id}
              >
                {/* Step Title and Description */}
                <div className="text-left flex-1">
                  {step.title}

                  {activeStep === step.id && (
                    <p className="mt-3 text-sm font-normal text-black">
                      {step.description}
                    </p>
                  )}
                </div>

                {/* "+" Circle for inactive steps */}
                {activeStep !== step.id && (
                  <div className="ml-4 flex-shrink-0 h-7 w-7 flex items-center justify-center rounded-full border-2 border-black text-black text-lg font-bold">
                    +
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Step Image */}
          <div className="relative h-72 w-full overflow-hidden rounded-xl lg:h-full">
            {activeStep !== null && steps[activeStep] && (
<Image
  key={steps[activeStep].id}
  src={steps[activeStep].image}
  alt={steps[activeStep].title}
  fill
  className={`object-cover transition-opacity duration-500
    ${activeStep === 5 ? "object-[70%_center]" : "object-center"}
  `}
 />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
