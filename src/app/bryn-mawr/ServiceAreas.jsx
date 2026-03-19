"use client";

import Image from 'next/image'
import Link from "next/link"

const locations = [
  { name: "Harleysville", slug: "harleysville" },
  { name: "Skippack", slug: "skippack" },
  { name: "Fort Washington", slug: "fort-washington" },
  { name: "Doylestown", slug: "doylestown" },
  { name: "Montgomeryville", slug: "montgomeryville" },
  { name: "Lansdale", slug: "lansdale" },
  { name: "Collegeville", slug: "collegeville" },
  { name: "Quakertown", slug: "quakertown" },
  { name: "Bryn Mawr", slug: "bryn-mawr" },
  { name: "Wayne", slug: "wayne" },
  { name: "Valley Forge", slug: "valley-forge" },
  { name: "Gladwyne", slug: "gladwyne" }
]

export default function ServiceAreas() {
  return (
    <section className="bg-[#FFFFFF] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="relative w-full h-[200px] md:h-[320px] rounded-xl overflow-hidden">
        <Image
            src="/referral/work_example1.JPG"
            alt="Ceramic coating service areas"
            fill
            className="object-cover"
        />
        </div>

        {/* TEXT */}
        <div>

          <h2 className="text-3xl font-bold mb-4">
            Our Service Areas
          </h2>

          <p className="text-black mb-6">
            Our service locations are equipped with the latest tools,
            equipment, and techniques to handle any ceramic coating job.
            Our teams are highly experienced, knowledgeable, and we stand
            by our work. Contact us today to set up an appointment.
          </p>

          <ul className="list-disc list-inside space-y-2 text-black">

            {locations.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/${city.slug}`}
                  className="hover:underline"
                >
                  Ceramic Coating in {city.name}
                </Link>
              </li>
            ))}

          </ul>

        </div>

      </div>
    </section>
  )
}